import {useState,useEffect} from 'react';
import { getAll, getById, addItem, updateItem, deleteItem } from './utils';
import UserComp from './UserComp';
import AddNewUser from './AddNewUser';

export const UsersUrl ='https://jsonplaceholder.typicode.com/users';
export const PostUrl ='https://jsonplaceholder.typicode.com/posts';
export const TodosUrl = 'https://jsonplaceholder.typicode.com/todos';


const frameStyle = {
    border: '3px solid',
    borderColor: 'black',
    padding: '20px',
    borderRadius: '30px', 
    width: 'fit-content', 
    margin: '10px auto' 
  };

function MainComp() {
    const [search , setsearch] = useState([])
    const [users,setusers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    const getAllUseres = async()=>{
        const {data} = await getAll(UsersUrl);
        setusers(data);
        setsearch(data);
    }
    useEffect (()=>{
        getAllUseres();
        console.log(users);
    },[])
    useEffect (()=>{
        console.log(users);
    },[users])

    const Search = (e) => {
        console.log(e)
        const filteredUsers = users.filter((x) =>
          x.name.includes(e)||x.email.includes(e)
        );
        setsearch(filteredUsers);
      };

      
  const addNewUser = (newUser) => {
    setusers([...users, newUser]); // Add the new user to the list
    setShowAddUser(false); // Hide the form after adding a user
  };

  const toggleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

    return (
      <div className="App" style={frameStyle}>
        Search : <input onChange={(e)=>Search(e.target.value)}></input>
        <button onClick={toggleAddUser}>Add</button>
        {search.map((x) => (
        <UserComp key={x.id} {...x} />
      ))}

      {showAddUser && (
        <AddNewUser addUser={addNewUser} cancelAdd={toggleAddUser} />
      )}  

      </div>
    );
  }
  
  export default MainComp;

