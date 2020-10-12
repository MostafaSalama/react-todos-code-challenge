import React, {useState} from 'react';
import styles from './styles.module.sass';
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/action-creators";
import {nanoid} from 'nanoid'
function TodoForm() {
  const [text,setText] = useState('');
  const dispatch = useDispatch();

  function onChangeHandler(e) {
      const {value} = e.target ;
      setText(value) ;
  }
  function onSubmit(e) {
    e.preventDefault();
    if(text) {
      dispatch(addTodo({
        text,
        id:nanoid()
      }));
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        onChange={onChangeHandler}
        value={text}
      />
    </form>
  );
}

export default TodoForm;
