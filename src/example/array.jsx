import React, { useState } from 'react'
import Tem from './tem'


export default function Array1() {

    const [data,setdata]=useState([1,2,3,4,5,6,7,8,9])
    const [data1,setdata1]=useState([{name:"react",age:22},{name:"angular",age:23},{name:"vuejs",age:24}])

    const [form,setform]=useState({name:"",age:""})

    const submit=()=>{
        setdata1([...data1,form])
    }

  return (
    <>
    <h1>Array</h1>
    {
        data.map((item)=>{
            return(
                <h1 >{item}</h1>
            )
        })
    }
  <h1>form </h1>

  <input type="text" placeholder='name' value={form.name} onChange={(e)=>{setform({...form,name:e.target.value})}}/>
  <input type="text" placeholder='age ' value={form.age}  onChange={(e)=>{setform({...form,age:e.target.value})}}/>
    <button onClick={submit}>submit</button>

  <h1>form datas</h1>

  {data1.map((item)=>{
        return(
            
            <Tem data={item}/>
        )
  }
    )}


    </>
  )
}


// user name 
// password
//phone
//email
//age

