import { useState, useEffect } from 'react';
import ChildTodosComp from './ChildTodosComp';


const frameStyle = {
  border: '3px solid',
  borderColor: 'gray',
  padding: '20px',
  width: '300px', 
  margin: '10px auto', // Center the div horizontally
  position: 'absolute',
  top: '10%',
  left: '62%', // Position to the right of the UserComp
  marginLeft: '45px', 

};

function AddNewUser(props) {

  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddNewUser = () => {
    props.addUser(newUser); // Use the function passed from MainComp
    setNewUser({ name: '', email: '' }); // Reset the input fields
  };

  return (
    <div className="App" style={frameStyle}>
      <h3>Add New User</h3>
      Name: <input type='text' name="name" value={newUser.name} onChange={handleInputChange} /><br />
      Email: <input type='text' name="email" value={newUser.email} onChange={handleInputChange} /><br />
      <button onClick={props.cancelAdd}>Cancel</button> 
      <button onClick={handleAddNewUser}>Add</button>
    </div>
  );
}

export default AddNewUser;
