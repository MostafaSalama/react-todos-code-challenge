import React, {useState} from 'react' ;
import {useParams} from 'react-router-dom' ;
import {useSelector} from "react-redux";
import {getTodoWithId} from "../util";
import Input from "../components/common/Input";
import ContentContainer from "../components/ContentContainer";
import {EditButton} from "../components/common/Button";
const EditTodo = ()=>{
  const {id} = useParams();
  const todo = useSelector(getTodoWithId(id))
  const [title,setTitle] = useState(todo?.text);
  const [completed,setCompleted] = useState(todo?.completed || false);
  if (!todo) return <h1>No todo with ID {id}</h1>

  function onChange(e) {
    setTitle(e.target.value) ;
  }
  function onCheckboxChange(e) {
    setCompleted(e.target.checked)
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(completed);
  }
  return (
    <ContentContainer>
      <form onSubmit={onSubmit}>
        <Input onChange={onChange} value={title} type='text'/>
        <label>
          <input type='checkbox' checked={completed} onChange={onCheckboxChange}/> Completed
        </label>
        <br/>
        <EditButton style={{'marginTop':'20px'}} onClick={onSubmit} type='submit'>Save</EditButton>
      </form>
    </ContentContainer>
  )
}
export default EditTodo;
