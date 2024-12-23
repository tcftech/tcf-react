import React from 'react'

export default function PropsExample(props) {

    let total=props.a+props.b

  return (
    <>

    <h1 style={{color:props.color}} > added {total}</h1>
    <img src={props.img} alt="" />
   
    </>
  )
}
