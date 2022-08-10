import React from 'react';

const Searchbox = ({filterValue}) => {
  return (
    <div className='mb3'>
        <input type="text" placeholder="Search User" className='pa3 w-25' 
        onChange={filterValue} style={{border: "none",borderRadius: "8px"}}/>
    </div>
  )
}

export default Searchbox