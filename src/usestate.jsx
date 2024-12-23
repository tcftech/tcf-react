import React, { useState } from 'react'

export default function Usestate() {

    // let change="changing";

    const [data,setdata]=useState("changing");
    const [count,setcount]=useState(0);



    const changing = ()=>{ 
        
        setdata("changed");
     }

     const increase = ()=>{
        setcount(count+1);
     }


//usetate is a hook that is used to change the value of the variable
//the value of the variable can be changed by the user
    


  return (
    <>
    {/* <h1>{change}</h1> */}
    <button onClick={changing}>change</button>
    <h1>second changing {data}</h1>

    <h1>count {count}</h1>

    <button onClick={increase}>increase</button>

    </>
  )
}
