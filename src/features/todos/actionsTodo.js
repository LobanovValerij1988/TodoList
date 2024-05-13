import { getAllTodoes, postTodo, putTodo, deleteTodo } from "../../api/server";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "TOGGLE_TODO";
export const LOAD_TODOES = "LOAD_TODOES";

function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

function removeTodo(removedId) {
  return {
    type: REMOVE_TODO,
    payload: removedId,
  };
}

function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

function loadTodoes(todoes) {
  return {
    type: LOAD_TODOES,
    payload: todoes,
  };
}

export function todoToggle(todoId) {
  return async function updateTodoThunk(dispatch) {
    const updatedTodo = putTodo(todoId);
    dispatch(updateTodo(updatedTodo));
  };
}

export function todoRemove(todoId) {
  return async function removeTodoThunk(dispatch) {
    const deletedId = deleteTodo(todoId);
    dispatch(removeTodo(deletedId));
  };
}

export function todoAdded(newTodo) {
  return async function addTodoThunk(dispatch) {
    const savedTodo = postTodo(newTodo);
    dispatch(addTodo(savedTodo));
  };
}

export function fetchTodos() {
  return async function loadTodoesThunk(dispatch) {
    const todos = getAllTodoes();
    dispatch(loadTodoes(todos));
  };
}
