export const getAllTasks = (req, res) => {
    res.send('Get all items');
}

export const createTask = (req, res) => {
    res.json(req.body);
}

export const getTask = (req, res) => {
    res.json({ id: req.params.id});
}

export const updateTask = (req, res) => {
    res.send('Update task.');
}

export const delateTask = (req, res) => {
    res.send('Delate task.');
}

