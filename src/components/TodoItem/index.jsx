import React from 'react';
import styles from './styles.module.sass';
import {CompleteButton, DeleteButton} from "../common/Button";
import {useDispatch} from "react-redux";
import {removeTodo} from "../../redux/action-creators";

function TodoItem({todo}) {
  const dispatch = useDispatch();
  function deleteTodo() {
    dispatch(removeTodo(todo.id));
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{todo.text}</h2>
      <CompleteButton onClick={null}>Complete</CompleteButton>
      <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
    </div>
  );
}

export default TodoItem;
