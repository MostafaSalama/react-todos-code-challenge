import React, { useState } from 'react';
import styles from './styles.module.sass';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/action-creators';
import { nanoid } from 'nanoid';
import Input from '../common/Input';
function TodoForm() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	function onChangeHandler(e) {
		const { value } = e.target;
		setText(value);
	}
	function onSubmit(e) {
		e.preventDefault();
		if (text) {
			dispatch(
				addTodo({
					text,
					id: nanoid(),
				}),
			);
		}
	}
	return (
		<form onSubmit={onSubmit}>
			<Input
				onChange={onChangeHandler}
				value={text}
				placeholder="What do you have to do?"
			/>
		</form>
	);
}

export default TodoForm;
