import React from 'react';
import styles from './styles.module.sass';
import {CompleteButton, DeleteButton, EditButton} from "../common/Button";
import {useDispatch} from "react-redux";
import {completeTODO, removeTodo} from "../../redux/action-creators";
import {useHistory} from 'react-router-dom'
function TodoItem({todo}) {
  const dispatch = useDispatch();
  const history = useHistory();
  // add completed class if the todo is completed
  const completedClass = todo.completed ? styles.completed : '' ;
  function deleteTodo() {
    dispatch(removeTodo(todo.id));
  }
  function completeTodo() {
    dispatch(completeTODO(todo.id));
  }
  function editHandler() {
    history.push(`/edit/${todo.id}`)
  }
  return (
    <article className={styles.card}>
      <div className={styles.textContainer}>
        <h2 className={`${styles.title} ${completedClass}`}>{todo.text}</h2>
        <p className={styles.time}>{todo.time}</p>
      </div>
      {!todo.completed &&  <CompleteButton onClick={completeTodo}>Complete</CompleteButton>}
      <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
      <EditButton onClick={editHandler}>Edit</EditButton>
    </article>
  );
}

export default TodoItem;
