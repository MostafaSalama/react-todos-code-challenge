import {combineReducers, createStore} from 'redux'
import todos from "./reducer";


const store = createStore(combineReducers({todos}),{
  todos:[]
}) ;
export default store ;
