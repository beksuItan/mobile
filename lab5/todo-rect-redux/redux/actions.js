import { ADD_TODO, DELETE_TODO } from "./actionTypes";

let id = 0;

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++id,
    task
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});


