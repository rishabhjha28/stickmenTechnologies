import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserData from './UserData'
import {jsPDF} from 'jspdf'

export default function AdminHome() {
    const [date,setDate] = useState("")
    const [userData,setUserData] = useState([])
    useEffect(()=>{
        const link = "http://localhost:8080"
        axios.get('/user')
            .then(function (response) {
                setUserData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])
    const currentDate =()=>{
        var dtToday = new Date();
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();

        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        var maxDate = year + '-' + month + '-' + day;
        return maxDate
    }
    const filterByDate =(e)=>{
        e.preventDefault()
        const link = "http://localhost:8080"
        axios.get('/user?date='+date)
        .then(function (response) {
            setUserData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    const download=()=>{
        let doc = new jsPDF();
        userData.forEach((e1,i1) => {
            e1["token"].forEach((e2,i2)=>{
                doc.text(e1["name"], 10, 10);
                doc.text(''+e2,10,20);
                doc.text(e1['mobileNo'][i2],10,30);
                if(!(i1 === userData.length-1 && i2 === e1["token"].length-1))
                    doc.addPage()
            })
        });
        doc.save("data.pdf");
    }
    return (
    <div className='admin'>
        <form onSubmit={filterByDate} >
            <input type="date" onChange={(e)=>{setDate(e.target.value)}}  name="date" max={currentDate()} value={date}/>
            <button type="submit" style = {{marginLeft:'20px'}}>Filter</button>
        </form>
        <div className ='data'>
            {userData.map((element,index)=>{
                element['srno'] = index+1
                return <UserData data = {element} key = {index}/>
            })}
        </div>
        <div className="downloaddata">
            <button onClick={download}>Download Data</button>
        </div>
    </div>
  )
}
