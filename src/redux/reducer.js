import {ADD_TODO, COMPLETE_TODO, REMOVE_TODO, UPDATE_TODO} from "./action-types";

export default function todos(state=[],action) {
    switch (action.type) {
      case ADD_TODO :
        return [action.payload,...state]
      case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id);
      case UPDATE_TODO:
        return state.map(todo=>{
          return todo.id === action.payload.id ? action.payload : todo ;
        });
      case COMPLETE_TODO:
        return state.map(todo=> {
          if (todo.id === action.id) {
            return {
              ...todo,completed:true
            }
          }
          return todo ;
        })
      default:
        return state;
    }
}
