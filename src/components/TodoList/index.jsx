import React from 'react';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types'
function TodoList({todos}) {
  return (
    <section>
      {todos?.map(todo=><TodoItem key={todo.id} todo={todo} />)}
    </section>
  );
}
TodoList.propTypes = {
  todos:PropTypes.array
}
export default TodoList;
