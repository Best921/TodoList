import * as ActionTypes from './ActionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ActionTypes.ADD_TODO,
  id: nextTodoId++,
  text: text
});

export const removeTodo = (id) => ({
  type: ActionTypes.REMOVE_TODO,
  id: id
});

export const toggleTodo = (id) => ({
  type: ActionTypes.TOGGLE_TODO,
  id: id
});