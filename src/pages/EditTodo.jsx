import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate, getTodoWithId } from '../util';
import Input from '../components/common/Input';
import ContentContainer from '../components/ContentContainer';
import { EditButton } from '../components/common/Button';
import { updateTodo } from '../redux/action-creators';
const EditTodo = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const todo = useSelector(getTodoWithId(id));
	const [text, setText] = useState(todo?.text);
	const [completed, setCompleted] = useState(todo?.completed || false);
	if (!todo) return <h1>No todo with ID {id}</h1>;

	function onChange(e) {
		setText(e.target.value);
	}
	function onCheckboxChange(e) {
		setCompleted(e.target.checked);
	}
	function onSubmit(e) {
		e.preventDefault();
		if (!text) return;
		dispatch(
			updateTodo({
				id,
				text,
				completed,
				time: formatDate(new Date()),
			}),
		);
		history.push('/');
	}
	return (
		<ContentContainer>
			<form onSubmit={onSubmit}>
				<Input required={true} onChange={onChange} value={text} type="text" />
				<label>
					<input
						type="checkbox"
						checked={completed}
						onChange={onCheckboxChange}
					/>{' '}
					Completed
				</label>
				<br />
				<EditButton
					style={{ marginTop: '20px' }}
					onClick={onSubmit}
					type="submit"
				>
					Save
				</EditButton>
			</form>
		</ContentContainer>
	);
};
export default EditTodo;
