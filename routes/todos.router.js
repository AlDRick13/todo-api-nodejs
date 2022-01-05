const express = require('express');

const router = express.Router();

const todos = [
    {id: 1, content: ' fg'}, 
{id: 2, content: 'gbfbbf'},
{id: 3, content: 'gfsyjym strah'},]

//controllers
const {getAllTodos, createTodo, updateTodo, deleteTodo} = require('../controllers/todos.controller');

//fetch all todos
router.get('/', getAllTodos) 

//crete new todos
router.post('/', createTodo);

//updateTodo
router.patch('/:id', updateTodo);

//delete todo
router.delete('/:id', deleteTodo);

exports.router = router