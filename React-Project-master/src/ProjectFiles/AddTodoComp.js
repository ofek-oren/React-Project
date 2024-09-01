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
    props.props.props.props.addNewTodo({userId: props.props.props.props.Todos[0].userId ,id:props.props.props.props.Todos.length+1, title: NewTodos, completed: false,  })
    setNewTodos(""); 
    alert("New todo has been added");
  }

  return (
    <div className="App" style={frameStyle}>
        New Todo - User{props.props.props.props.Todos[0].userId}<br/>
        Title: <input type='text' value={NewTodos} onChange={(e)=>setNewTodos(e.target.value)}></input><br/>
        <button onClick={props.props.cancelAdd}>Cancel</button> 
        <button onClick={(e)=>{handleAddNewTodo()}}>Add</button>

    </div>
  );
}

export default AddTodoComp;
