import React from 'react';

import styles from './styles.module.sass';
import {CompleteButton, DeleteButton} from "../common/Button";

function TodoItem({todo}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{todo.text}</h2>
      <CompleteButton onClick={null}>Complete</CompleteButton>
      <DeleteButton onClick={null}>Delete</DeleteButton>
    </div>
  );
}

export default TodoItem;
