import React, {useState, useEffect} from 'react';
import axios from 'axios'


function List() {
    const [users, setUsers] = useState([])

    useEffect( () => {
        axios.get("/api/users")
        .then(response => setUsers(response.data))
    },[])

    console.log(users)
    return(
        <ul>
        {users.map(((user,index) => <li key={index}>{user.last_name}, {user.first_name} - {user.email}</li>))}
        </ul>
    )   
    
}

export default List
