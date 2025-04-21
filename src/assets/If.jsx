import React from 'react'
import { useState } from 'react'

function If() {
    const[loggedIn,setLoggedIn]= useState(3);
  return (
    <div>
        {loggedIn==1?
        <h1>Welcome user 1</h1>
        :loggedIn==2?<h1>Welcome user 2</h1>
        :<h1>Welcome user 3</h1>
        };
    
    </div>
    )
}

export default If