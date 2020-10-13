import React from 'react';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {useSelector} from "react-redux";

function IndexPage() {
  const todos = useSelector(state=>state.todos)
  return (
    <main>
      <ContentContainer>
        <TodoForm />
        <TodoList todos={todos} />
      </ContentContainer>
    </main>
  );
}

export default IndexPage;
