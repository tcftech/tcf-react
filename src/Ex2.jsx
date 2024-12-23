import React, { useState } from 'react'

export default function Ex2(props) {

    // const []
    //  let change="changing"

   const  [change,setchange] =useState("changing")
   const [count,setcount]=useState(0)
    const changing =()=>{

        setchange("changed")
       
    }

   const counting=()=>{

    setcount(count+1)


    }





  return (
    <>
          <h1>usestate example {change}</h1>
           <h1>{props.name}</h1>
           <img src={props.im1} alt="" /> 
           <input type={props.typein}  />

           <button onClick={changing}>change</button>

         <button onClick={counting} >count </button>
         <button onClick={()=>setcount(count+1)}>second</button>
         <h1>{count}</h1>

    </>
    
  )
}




// register
//  create user name 
// create password 
// button register

 // login 
 //usernane
 // password
 // login 


//  hooks 
// 1 , usestate 
// useeffect




