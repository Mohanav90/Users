import React from 'react';
import '../App.css'

const Card = ({name,username,email,id}) => {
  return (
    <div className='dib br3 pa3 ma2 grow bw2 shadow-5 tc w-25 box' style={{backgroundColor:"#667b9b",color:'rgba(255,250,235,1)'}}>
        <img src={`https://robohash.org/${id}?200*200`} alt="robo"/>
        <div>
        <h2 style={{letterSpacing:"5px"}}>{name}</h2>        
        <h4>{username}</h4>
        <h4>{email}</h4>
        </div>

    </div>
  )
}

export default Card