 import React from 'react'
 import { useState } from 'react'
 const User = () => {
  const[name, setname]= useState(0);
  function updateName(){
    setname(name+2)
  }
   return (
     <div>
        <h1>{name}</h1>
        <h1>hii this is my first program in react</h1>
        <button onClick={updateName}>click me</button>
        <img src="https://www.shutterstock.com/image-vector/minimalist-banner-background-pastel-colorful-260nw-2470687695.jpg" alt="" srcset="" />
     </div>
   )
 }
 
 export default User