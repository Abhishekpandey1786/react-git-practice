import React from 'react'

function Student(props) {
  return (
    <div style={{border:"2px solid black", margin:"10px", padding:"10px"}}>
        <h1>student:{props.name}</h1>
        {/* <h2>student:{props.Email}</h2> */}
        {/* <h2>student:{props.Addresh}</h2> */}
        <h2>student:{props.contact}</h2>
    </div>
  )
}

export default Student