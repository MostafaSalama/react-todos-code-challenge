import React from 'react' ;
import TodoList from "../components/TodoList";
import ContentContainer from "../components/ContentContainer";
import {useSelector} from "react-redux";

const AllTodos = ()=>{
  const todos = useSelector(state=>state.todos)
  return <ContentContainer><TodoList todos={todos}/></ContentContainer>
}
export default AllTodos;
