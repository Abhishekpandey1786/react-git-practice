import React from 'react'
import { useState } from 'react'
function Hide() {
    const[statsus,setStatus]=useState(true);
  return (
    <div>
        { 
        statsus?
        <h1>hii abhishek pandey how are you! </h1>:null
        }
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=> setStatus(!statsus)}>toggal</button>

    </div>
  )
}

export default Hide