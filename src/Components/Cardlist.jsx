import React from 'react';
import Card from '../Components/Card';

const Cardlist = ({users}) => {
  return (
    <div>
       {
        users.map((user,i) => {
           return(
            <Card  
                key = {i}
                id = {users[i].id}
                name = {users[i].name}
                username = {users[i].username}
                email = {users[i].email}
            />
           )
        })
       }
    </div>
  )
}

export default Cardlist