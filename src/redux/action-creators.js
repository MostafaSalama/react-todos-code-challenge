import {ADD_TODO, COMPLETE_TODO, REMOVE_TODO, UPDATE_TODO} from "./action-types";

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
export function updateTodo(payload) {
    return {
      type:UPDATE_TODO,
      payload
    }
}
export function completeTODO(id) {
    return {
      type:COMPLETE_TODO,
      id
    }
}
