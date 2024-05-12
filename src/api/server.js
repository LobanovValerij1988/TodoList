import { nanoid } from "nanoid"; 
import { getTodosFromLocalStorage, seedingTodoList } from '../helpers/localStorageHelpers'

export function getAllTodoes (){
    //next line for development purpose if you need to force clearing of localStorage
    //localStorage.clear();

    // check if there any data  in our todolist localStorage if not seeding it
    if (localStorage.length === 0){
        seedingTodoList();
    }
    return getTodosFromLocalStorage();
}


export function postTodo (todo){
    const id = nanoid();
    const savedTodo = {
      task: todo.task,
      description: todo.description,
      isDone: false,
      id
    }
    localStorage.setItem(id,JSON.stringify(savedTodo));
    return savedTodo;
}

export function putTodo (todoId) {
      const updatedTodo = JSON.parse(localStorage.getItem(todoId))
      updatedTodo.isDone = !updatedTodo.isDone;
      localStorage.setItem(todoId,JSON.stringify(updatedTodo));
      return updatedTodo;
}

export function deleteTodo (todoId) {
    localStorage.removeItem(todoId);
    return todoId;
}