import { addTodo } from './addTodo';
import { removeTodo } from './removeTodo';
import { editTodo } from './editTodo';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../../actionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
    case EDIT_TODO:
      return editTodo(state, action);
    default:
      return state;
  }
};
