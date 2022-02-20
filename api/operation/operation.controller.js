const {
  getAllOperations,
  createOperation,
  deleteOperation,
  getOperationById,
  updateOperation,
} = require('./operation.service');

async function getAllOperationsHandler(req, res) {
  try {
    const operations = await getAllOperations();

    if (operations.length == 0) {
      return res.status(404).json({ message: `no operations found` });
    }

    return res.status(200).json(operations);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createOperationHandler(req, res) {
  // const { title } = req.body;
  console.log('entra en createHandler');
  try {
    // if (!title) {
    //   return res.status(422).json({ response: 'Missing values in the body' });
    // }

    const operation = await createOperation(req.body);
    return res.status(201).json(operation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getOperationByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const operation = await getOperationById(id);
    if (!operation) {
      return res
        .status(404)
        .json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(operation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateOperationHandler(req, res) {
  const { id } = req.params;
  try {
    const { title, description, organizer, place } = req.body;

    if (!title && !description && !organizer && !place) {
      return res.status(422).json({ response: 'Missing values in the body' });
    }

    const operation = await updateOperation(id, req.body, {
      new: true,
    });

    if (!operation) {
      return res
        .status(404)
        .json({ message: `product not found with id: ${id}` });
    }

    return res.status(204).json(operation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteOperationHandler(req, res) {
  const { id } = req.params;
  try {
    const operation = await deleteOperation(id);

    if (!operation) {
      return res
        .status(404)
        .json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(operation);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllOperationsHandler,
  createOperationHandler,
  getOperationByIdHandler,
  updateOperationHandler,
  deleteOperationHandler,
};
