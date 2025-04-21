import "./App.css";
import { useState } from "react";
import User from "./assets/User";
import Student from "./assets/Student";
import Fan from "./assets/Fan";
import Input from "./assets/Input";
import INPT from "./assets/INPT";
import Hide from "./assets/Hide";
import Form from "./assets/Form";
import If from "./assets/If";
import Login from "./assets/Login";
// import {useState} from "react";
function App() {
 const[data, setData]= useState(null);  
 const[print, setPrint]= useState(false);
   function getData(val){
    console.log (val.target.value);
    setData(val.target.value);
    setPrint(false);
   }    


  // const[contact, setContact]= useState(7047160000);
  // const[name, setName]= useState("jaya");

  // const [data, setdata] = useState(0);
  // function updateData() {
  //   setdata(data + 1);
  // }
  // function apple(){
  //   alert("hello abhishek pandey")
  // }
  return (
    <>
      {/* <User /> */}
      {/* <h1>{data}</h1> */}
      {/* <button onClick={apple}> click me</button> */}
      {/* <button onClick={()=>alert("hiii abhishek")}> click me</button> */}
      {/* <button onClick={updateData}> click me</button> */}
      {/* <Student name={"abhi"} Email={"abhi.test@gmai.com"} Addresh={"Noida"} contact={7047160000}/> */}
      {/* <Student name={"anil"} Email={"anil.test@gmai.com"} Addresh={"satna"} contact={7047160000}/> */}
      {/* <Student name={"jaya"} Email={"jaya.test@gmai.com"} Addresh={"udki"} contact={7047160000}/> */}
      {/* <Student */}
        {/* // name={"kirti"} */}
        {/* // Email={"kirti.test@gmai.com"} */}
        {/* // Addresh={"narayanpur"} */}
      {/* /> */}
      {/* <Student name={name}/> */}
      {/* <button onClick={()=>{setName("love you baccha")}}>click here</button> */}
    
    {/* <Student contact={contact}/> */}
    {/* <button onClick={()=>{setContact("65555445546")}}>click here</button> */}

    {/* <Fan name="anil" email="anil@gmail.com"/> */}


    <div>
      <h1>gwt input box value !</h1>
      {
        print? 
        <h1>{data}</h1>:null
      }
      <input type="text" onChange={getData} />
       <button onClick={()=>setPrint(true)}>Print data </button>
    </div>

   <Input/>
    <INPT/>
    <Hide/>
    <Form/>
    <If/>
    <Login/>
  </>
  );
}
export default App;
