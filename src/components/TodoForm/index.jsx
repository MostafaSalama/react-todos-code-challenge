import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/action-creators';
import { nanoid } from 'nanoid';
import Input from '../common/Input';
import {formatDate} from "../../util";
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
          time:formatDate(new Date())
				}),
			);
			setText('');
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
