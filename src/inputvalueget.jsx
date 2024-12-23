import React, { useState } from 'react'

import img1 from '../src/assets/images/image1.png'

export default function Inputvalueget() {

     const [data,setdata]=useState("ee");

     const [height,setheight]=useState("");
     const [width,setwidth]=useState("");

     const [height1,setheight1]=useState("100px");
     const [width1,setwidth1]=useState("200px");

     const changeshapes = ()=>{
     
  
        setheight1(height);
        setwidth1(width);



     }

   
     
        const changing = (event)=>{
           setdata(event.target.value);//event.target.value is used to get the value of the input field
        }





  return (
    <>

    <h1>input value get {data}</h1>

   <input value={data} onChange={changing} type="text" />

   <h1>height</h1>
   <input type="text" value={height} onChange={(e)=>setheight(e.target.value)} />
   <h1>width</h1>
   <input type="text" value={width} onChange={(e)=>setwidth(e.target.value)} />
   <button onClick={changeshapes}>set height and width</button>

   <img src={img1} alt=""  style={{width:width1,height:height1}}/>

   <div></div>

    </>
  )
}

// div height and width and bg color 
// border radius
// left right top bottom-border
// padding margin
