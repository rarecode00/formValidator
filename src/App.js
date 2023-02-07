import React, { useState } from "react";
import "../src/App.css";
import validator from "validator";
import Data from "./Data";



const App = () => {
 const [isEmail, setisEmail] = useState(false)
 const [isNumber, setisNumber] = useState(false)
 const [forms , setForms] = useState([])
 const [currentForms , setCurrentForms] = useState({ name : "" , Email: "11" , Address : "" , Number: "" , Password: ""})
 const [data , setData] = useState(false)
 const [dataAdded , setdataAdded] = useState(false)
  
  const handleChangeEmail = (e) =>{
    if(validator.isEmail(e.target.value)){
       setisEmail(true)
       setCurrentForms({...currentForms, Email: e.target.value})
       console.log("Perfect")
    }else{
       setisEmail(false)
    }
  }
  
  const handleChangeNumber = (e) =>{
     if(validator.isMobilePhone(e.target.value) && e.target.value.length === 10){
       console.log("Correct Phone number");
       setCurrentForms({...currentForms , Number: e.target.value})
       setisNumber(true)
     }else{
       setisNumber(false)
     }
  }

  const handleName = (e) =>{
     setCurrentForms({...currentForms, name: e.target.value})
  }

  const handleAddress = (e) =>{
    setCurrentForms({...currentForms, Address: e.target.value})
 }
  const handleClickSubmit = (e) =>{
      e.preventDefault()
      if(!isEmail || !isNumber) return;
      console.log('clicked')
      forms.push(currentForms);
      setForms(forms)
      setdataAdded(true)
  }

  const handleClick = (e) =>{
      e.preventDefault()
      // console.log(forms)
      setData(!data)
  }

  const handleClick1 = () =>{
      setData(!data)
  }

  return (
    <div className="container">
      {data ? <Data handleClick1 = {handleClick1} forms = {forms}/> : ""}
       <h1 className={data ? 'hidden' : ""}>Form Validator using React js</h1>
      <form className={data ? 'hidden' : 'none'}>
        <div>
          <input type="text" placeholder="Enter Your Name" onChange={handleName} required />
        </div>
        <div>
          <input type="text" placeholder="Enter Valid Email Address" onChange={handleChangeEmail} required />
        </div>
        <div>
          <input type="text" placeholder="Enter Your Address" onChange={handleAddress} required />
        </div>
        <div>
          <input type="digits" placeholder="Enter Your 10 digit number" onChange={handleChangeNumber} maxLength={10} required />
        </div>
        <input type="password" placeholder="Enter Your password" required />
        <div className="btn">
          <button onClick={handleClickSubmit}>Submit</button>
          <button onClick={handleClick}>Show data</button>
        </div>
      </form>
    </div>
  );
};

export default App;
