import React from 'react' ;
import ContentContainer from "../components/ContentContainer";
import TodoList from "../components/TodoList";
import {useSelector} from "react-redux";
import {getCompletedTodos} from "../util";

const CompletedTodos = ()=>{
  const todos = useSelector(getCompletedTodos)
  return <ContentContainer><TodoList todos={todos}/></ContentContainer>
}
export default CompletedTodos;
