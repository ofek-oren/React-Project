import {useState,useEffect} from 'react';
import { getAll, getById, addItem, updateItem, deleteItem } from './utils';
import UserComp from './UserComp';


const UsersUrl ='https://jsonplaceholder.typicode.com/users';
const PostUrl ='https://jsonplaceholder.typicode.com/posts';
const TodosUrl = 'https://jsonplaceholder.typicode.com/todos';


const frameStyle = {
    border: '3px solid',
    borderColor: 'black',
    padding: '20px',
    borderRadius: '30px', 
    width: 'fit-content', 
    margin: '10px auto' 
  };

function MaincComp() {
    const [search , setsearch] = useState([])
    const [users,setusers] = useState([]);
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


    return (
      <div className="App" style={frameStyle}>
        Search : <input onChange={(e)=>Search(e.target.value)}></input>
        <button>Add</button>
        {search.map((x) => (
        <UserComp key={x.id} {...x} />
      ))}
      </div>
    );
  }
  
  export default MaincComp;