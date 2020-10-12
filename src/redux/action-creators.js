import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "./action-types";

export function addTodo(payload) {
    return {
      type:ADD_TODO,
      payload
    }
}
export function removeTodo(id) {
    return {
      type:REMOVE_TODO,
      id
    }
}
export function UpdateTodo(payload) {
    return {
      type:UPDATE_TODO,
      payload
    }
}