import { useState, useEffect } from 'react';
import ChildTodosComp from './ChildTodosComp';


const frameStyle = {
  border: '3px solid',
  borderColor: 'gray',
  padding: '20px',
  width: '250px', 
  margin: '10px auto' // Center the div horizontally
};


function AddTodoComp(props) {

  const [NewTodos, setNewTodos] = useState("");

  useEffect(() => {
    console.log(props)
  },[])
  const handleAddNewTodo =()=>{
    props.props.addNewTodo({title: NewTodos, completed: false})

  }
  return (
    <div className="App" style={frameStyle}>
        New Todo - User{props.props.props[0].userId}<br/>
        Title: <input type='text' onChange={(e)=>setNewTodos(e.target.value)}></input><br/>
        <button>Cancel</button>
        <button onClick={(e)=>{handleAddNewTodo()}}>Add</button>

    </div>
  );
}

export default AddTodoComp;
