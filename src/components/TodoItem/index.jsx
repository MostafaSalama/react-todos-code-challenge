import React from 'react';
import styles from './styles.module.sass';
import {CompleteButton, DeleteButton} from "../common/Button";
import {useDispatch} from "react-redux";
import {completeTODO, removeTodo} from "../../redux/action-creators";

function TodoItem({todo}) {
  const dispatch = useDispatch();
  // add completed class if the todo is completed
  const completedClass = todo.completed ? styles.completed : '' ;
  function deleteTodo() {
    dispatch(removeTodo(todo.id));
  }
  function completeTodo() {
    dispatch(completeTODO(todo.id));
  }
  return (
    <article className={styles.card}>
      <div className={styles.textContainer}>
        <h2 className={`${styles.title} ${completedClass}`}>{todo.text}</h2>
        <p className={styles.time}>{todo.time}</p>
      </div>
      {!todo.completed &&  <CompleteButton onClick={completeTodo}>Complete</CompleteButton>}
      <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
    </article>
  );
}

export default TodoItem;
