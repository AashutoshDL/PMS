import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:''
    })
    const [response,setResponse]=useState(null)

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const res=await axios.post(`${import.meta.env.VITE_backend_url}/auth/register`,data,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if(res.status==201){
                setResponse(res.data);
                console.log(res.message);
            }else{
                console.error("Unexpected Response",res);
            }
        }catch(error){
            if(error.response){
                console.log(`Error: ${error.response.data.message || "Unknown server error"}`);
            }else if(error.request){
                console.log("Error unable to connnect to the server");
                
            }else{
                console.log("Unknown error");
            }
        }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input type='text' name='username' value={data.username} onChange={handleChange} placeholder='Enter your username' />
        <h3>Email</h3>
        <input type='email' name='email' value={data.email} onChange={handleChange} placeholder='Enter your email' />
        <h3>Password</h3>
        <input type='password' name='password' value={data.password} onChange={handleChange} placeholder='Enter your password' />
        <button type='submit'>Register</button>
      </form>
      {response && (
                <div>
                    <h3>Response from server</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
    </div>
  )
}

export default Signup
