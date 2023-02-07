import React from 'react'
import ShowData from './ShowData'

const Data = (props) => {
  return (
    <div>
        <h1>All Forms</h1>
        {props.forms.map((form) =>{
           return (
             <div className='row'>
               <div><strong>Name :</strong> {form.name}</div>
               <div><strong>Email address :</strong> {form.Email}</div>
               <div><strong>Number :</strong> {form.Number}</div>
               <div><strong>Address :</strong> {form.Address}</div>
             </div>
           )
        })}

        <button onClick={() =>{props.handleClick1()}}>Back to Form</button>
    </div>
  )
}

export default Data