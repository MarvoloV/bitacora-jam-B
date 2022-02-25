const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { UserSchema } = require('./user.schema');
const { Schema } = mongoose;
const config = require('../../config');

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      trim: true,
    },
    username: {
      type: String,
      lowercase: true,
      index: true,
      uppercase: true,
      required: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    registered: {
      date: Date,
      age: Number,
    },
    cell: String,
    country: String,
    picture: String,
    role: {
      type: String,
      default: 'user',
      enum: config.userRoles,
      required: true,
    },
    accountId: [
      {
        type: String,
        ref: 'Account',
        required: true,
      },
    ],
    active: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    return await bcrypt.compare(candidatePassword, user.password);
  } catch (error) {
    throw error;
  }
};

userSchema.virtual('profile').get(function () {
  const { email, role, _id, username } = this;
  return { email, role, _id, username };
});

module.exports = mongoose.model('User', userSchema);
