import React, { useState, useEffect } from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from './Searchbox';

const Application = () => {
    const [users,setUsers] = useState([]);
    const [searchField,setSearchField] = useState(''); 

    const searchFilterValue = (event) => {
        setSearchField(event.target.value);
        // console.log(event.target.value);
    }
    const filterUser = users.filter(user =>{
        return user.name.toLowerCase().includes(searchField.toLowerCase());
    })
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users))
        // .then(users => setUsers([])) !user.length show loading
    },[]);

    return(!users.length) ? 
    <h1>Loading</h1> :
  (
    <div className='tc'>
        <h1 className='f-100 shadow' style={{color: "#4172c1",fontSize: "48px"}}>Users</h1>
        <Searchbox filterValue = {searchFilterValue} />
        <Cardlist users ={filterUser}/>
    </div>
  )
}

export default Application