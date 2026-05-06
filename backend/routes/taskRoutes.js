const express = require('express');
const router = express.Router();
router.put('/:id', toggleTask);
const {
  getTasks,
  addTask,
  deleteTask,
  toggleTask
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', addTask);A
router.delete('/:id', deleteTask);
router.put('/:id', toggleTask);

module.exports = router;