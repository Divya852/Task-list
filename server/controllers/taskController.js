const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;
    const task = new Task({ title, description, deadline, owner: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

exports.shareTask = async (req, res) => {
  try {
    const { taskId, userId } = req.body;
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.owner.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

    task.sharedWith.push(userId);
    await task.save();
    res.status(200).json({ message: 'Task shared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sharing task' });
  }
};
