import React, { useState } from 'react'

function INPT () {
    const[data,setData]=useState(null);
    const[print,setPrint]=useState(false);
    function getData(val){
        console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
  return (
    <div>
        <h1>Hello input please inter something</h1>
        {
            print?
            <h1>{data}</h1>:null
        }
        <input type="text"  onChange={getData}/>
        <button onClick={()=>setPrint(true)}>print the data</button>  
    </div>
  )
}

export default INPT