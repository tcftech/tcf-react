import React from 'react'

export default function Tem(props) {
  return (
    <>
   <div style={{border:"1px solid black",margin:"10px",padding:"10px",backgroundColor:"lightblue"}}>
   <h1 >{props.data.name}</h1>
   <h1>{props.data.age}</h1>
   </div>
    </>
  )
}
