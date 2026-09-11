const express = require('express');
const router = express.Router();
const { 
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} = require('../controllers/todoController');

// Map controllers to the base route ('/api/todos')
router.route('/')
  .get(getTodos)
  .post(createTodo);

// Map controllers to the dynamic ID route ('/api/todos/:id')
router.route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;