import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../actionTypes';

const addTodo = name => ({
  type: ADD_TODO,
  payload: { name },
});

const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId,
});

const editTodo = (todoId, newName) => ({
  type: EDIT_TODO,
  payload: { id: todoId, name: newName },
});

export {
  addTodo,
  removeTodo,
  editTodo,
};
