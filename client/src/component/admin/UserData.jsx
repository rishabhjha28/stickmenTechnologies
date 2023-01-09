import React from 'react'

export default function UserData(props) {
    const data = props.data
  return (
    <div className='userdata'>
        <div className="srno">{data.srno}</div>
        <div className="name">{data.name}</div>
        <div className="tokenNo">
            {data.token.map((element,index)=>{
                return <div key = {index}>{element}</div>
            })}
        </div>
        <div className='mobileno'>
            {data.mobileNo.map((element,index)=>{
                return <div key = {index}>{element}</div>
            })}
        </div>
    </div>
  )
}
