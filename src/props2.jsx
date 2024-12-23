import React from 'react'

export default function Props2(props) {

  let change="changing"

  const changing = ()=>{

  }


  return (
   <>
    

      <h1 style={{backgroundColor:props.bg}}> props   {props.name} </h1>

      <input type={props.inputtype } />

      <h2>{change}</h2>

      {/* <button  onClick={} >change</button> */}


   </>
  )
}
