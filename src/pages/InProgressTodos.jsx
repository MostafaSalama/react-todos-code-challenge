import React from 'react' ;
import ContentContainer from "../components/ContentContainer";
import TodoList from "../components/TodoList";
import {getInProgressTodos} from "../util";
import {useSelector} from "react-redux";

const InProgressTodos = ()=>{
  const todos = useSelector(getInProgressTodos)
  return <ContentContainer><TodoList todos={todos}/></ContentContainer>
}
export default  InProgressTodos ;
