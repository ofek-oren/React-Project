import { useState, useEffect } from 'react';
import { getAll, getById, addItem, updateItem, deleteItem } from './utils';
import {TodosUrl} from './MaincComp';
import MaincComp from './MainComp';

const frameStyle = {
  border: '3px solid',
  borderColor: 'gray',
  padding: '20px',
  width: '250px', 
  margin: '10px auto' // Center the div horizontally
};

function ChildTodosComp(props) {
  const [Title, setTitle] = useState("");
  const [Completed, setCompleted] = useState(false);
  

  useEffect(() => {
    setTitle(props.title);
    setCompleted(props.completed);
  },[]);
  
  const handeleMarkCompleted =async()=>{
    setCompleted(true);
    await updateItem(TodosUrl,props.id,{completed:true}) 
  }

  return (
    <div className="App" style={frameStyle}>
    Title: <span>{Title}</span><br />
    Completed: <span>{Completed ? 'Yes' : 'No'}</span><br />
    {!Completed && ( // Display button only if not completed
      <button onClick={(e)=>handeleMarkCompleted()}>Mark Completed</button>
    )}
  </div>
);
}

export default ChildTodosComp;
