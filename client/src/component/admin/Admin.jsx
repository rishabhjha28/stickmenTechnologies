import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [credentials,setCredentials] = useState({
    userName:"",
    password:""
  });
  const navigate = useNavigate();
  const handleChange = (e)=>{
    const {name,value} = e.target
    setCredentials((prev)=>{
      return({
        ...prev,
        [name]:value
      })
    })
  }
  const login =(e)=>{
    e.preventDefault()
    const link ="http://localhost:8080"
    const data = credentials;
    axios.post('/admin',data)
    .then(function (response) {
      if(response.data)
        navigate('/adminhome')
      else
        navigate('/loginfailed')
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }
  return (
    <div className='App flex-col'>
      <form onSubmit={login} className='App flex-col'>
        <p>Admin Login</p>
        <input type="text" required name='userName' autoFocus value={credentials.userName} placeholder="Enter Username" onChange={handleChange}/>
        <input type="password" required placeholder='Enter Password' name="password" value={credentials.password} onChange={handleChange}/>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
