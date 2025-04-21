import React, { useState } from 'react'

function Login() {
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[userErr,setUserErr]=useState(false);
    const[passErr,setPassErr]= useState(false);
    function LoginHandle(e){

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3){
          setUserErr(true)
        }else{
            setUserErr(false);
        }
        function passwordHandler(e){
            let item=e.target.value;
            if(item.length<3){
              setUserErr(true)
            }else{
                setUserErr(false);
            }

        console.log(e.target.value.length)
    }
  return (
    <div>
        <input type="text" name="" id="" placeholder='Enter the user name'onChange={userHandler} /> {userErr?<span>User not valid</span>:""}
         <br/><br/>
        <input type="text" name="" id="" placeholder='Enter the password' onChange={passwordHandler} />{passErr?<span>password not valid</span>:""}
        <br/><br/>
        <button>Login</button>
    </div>
  )
}

export default Login