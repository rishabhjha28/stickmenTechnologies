import React, { useEffect, useState } from 'react'

export default function MobNo(props) {
    const [mobNo,setMobNo] = useState('')
    const handleMob =(e)=>{
        const {value} = e.target;
        if(value>= 0 && value <= 9999999999)
            setMobNo(value)   
    }
    useEffect(()=>{
        setMobNo('')
    },[props.reqSend])
    useEffect(()=>{
        if(mobNo.length === 10){
            props.setMobileNo((prev)=>{
                prev[props.id] = mobNo
                return[...prev]
            })
        }
        else{
            props.setMobileNo((prev)=>{
                prev = prev.filter((item,index)=> {
                    return index !== props.id;
                })
                return [...prev]
            })
        }
    },[mobNo.length === 10])
  return (
    <input type="tel" name="mobileNo" placeholder='Enter Your Mobile Number' value = {mobNo} onChange={handleMob}/>
  )
}
