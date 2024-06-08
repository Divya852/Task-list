const express = require('express');
const { createTask, getTasks, shareTask } = require('../controllers/taskController');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');

router.post('/tasks', auth, createTask);
router.get('/tasks', auth, getTasks);
router.post('/tasks/share', auth, shareTask);

module.exports = router;
