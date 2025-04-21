 import React from 'react'
 import { useState } from 'react'
 
 function Form() {
    const[name,setName]= useState("");
    const[tnc,setTnc]=useState(false);
    const[interest,setInterest]=useState("");
    function getFromData(e){
        e.preventDefault(); // to prevent the page from reloading
        console.log(name,tnc,interest);
        // setFormData({name,tnc,interest});
    }
    // const[formData, setFormData]= useState({});
   return (
     <div>
        <h1>Handle From in React</h1>
        <form onSubmit={getFromData}>
            <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
           <select onChange={(e)=>setInterest(e.target.value)}>
            <option >Marvel</option>
            <option>Dc</option>
           </select> <br/> <br/>
              <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>accept the term and condition</span><br/><br/>
              <button type='submit'>Submit</button>
       </form>
     </div>
   )
 }
 
 export default Form