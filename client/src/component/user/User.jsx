import React, { useEffect, useState } from 'react'
import MobNo from './MobNo'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function User() {
  const [name,setName] = useState('');
  const [mobileNo,setMobileNo] = useState([]);
  const [reqSend,setReqSend] = useState(false);
  const [message,setMessage] = useState("")
  const [totalMob,setTotalMob] = useState([<MobNo reqSend = {reqSend} setMobileNo = {setMobileNo} key = {0} id ={0}/>]);
  useEffect(()=>{
    setTimeout(() => {
      setMessage("")
    }, 3000);
  },[message])
  const addMob = ()=>{
    setTotalMob((prev)=>[...prev,<MobNo setMobileNo={setMobileNo} reqSend = {reqSend} key = {totalMob.length} id = {totalMob.length}/>])
    }
  const saveUser =(e)=>{
    e.preventDefault()
    if(mobileNo.length){
      const sendData = {
        name:name,
        mobileNo:mobileNo,
        token:[]
      }
      const link = "http://localhost:8080"
      axios.post('/user', sendData)
      .then(function (response) {
        setName("")
        setTotalMob([<MobNo reqSend = {!reqSend} setMobileNo = {setMobileNo} key = {0} id ={0}/>])
        setMobileNo([])
        setReqSend(!reqSend)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      setMessage("Enter a valid mobile no")
    }
  }
  return (
    <div className='App flex-col'>
        <form onSubmit={saveUser} className='App flex-col'>
            <input type="text" placeholder='Enter Your Name' autoFocus required name = {'name'} value = {name} onChange = {(e)=>setName(e.target.value)}/>
            {
              totalMob.map((element)=>{
                return element
              })
            }
            <p className='addMore' onClick={addMob}> Add More Number </p>
            <button type="submit">Send</button>
            <Link to = '/admin'>Admin</Link>
            {
              message.length > 0 && message
            }
        </form>
    </div>
  )
}