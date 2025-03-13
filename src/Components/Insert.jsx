import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

export const Insert = () => {

    const navigate = useNavigate();

    const[values, setValues]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

    const handelSubmit=(e)=>{
        e.preventDefault();
        axios
        .post('http://localhost:2000/students',values)
        .then((res)=>{
            console.log(res);
            alert("Record Added Successfully")
            navigate("/")
        })
    }


  return (
    <>
        <center className='m-5'>
            <h2>New Student Form</h2>
            <form onSubmit={handelSubmit} className='form-control'>
                <div>
                    <label className='me-3 m-2'>Name: </label>
                    <input
                     type="text"
                     name="name"
                     placeholder='enter your name'
                     onChange={(e)=>setValues({...values, name:e.target.value})}                     
                     />
                </div>
                <div>
                    <label className='me-3 m-2'>Email: </label>
                    <input
                     type="email"
                     name="email"
                     placeholder='enter your email'
                     onChange={(e)=>setValues({...values, email:e.target.value})}                     
                     />
                </div>
                <div>
                    <label className='me-3 m-2'>Phone: </label>
                    <input
                     type="number"
                     name="phone"
                     placeholder='enter your phone number'
                     onChange={(e)=>setValues({...values, phone:e.target.value})}                     
                     />
                </div>
                <div>
                    <label className='me-3'>Password: </label>
                    <input
                     type="password"
                     name="password"
                     placeholder='enter your pass code'
                     onChange={(e)=>setValues({...values, password:e.target.value})}                     
                     />
                </div>
                <button className='btn btn-success m-4'>Submit</button>
                <Link to='/'><button className='btn btn-danger'>Back</button></Link>
            </form>
        </center>
    </>
  )
}
