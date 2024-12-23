import React, { useState } from 'react'

import img from '../assets/images/image1.png'

export default function Inputbox() {


    const [usename,setusename]=useState("eee");

// get height and width of the input field
    const [height,setheight]=useState("200px");
    const [width,setwidth]=useState("200px");
// chnage the height and width of the image
    const [height1,setheight1]=useState("200px");
    const [width1,setwidth1]=useState("200px");


    // dropdwon value
    const [dropdown,setdropdown]=useState("volvo");



    const change=(e)=>{

        setusename(e.target.value);

    }


    // set the height and width of the image

    const changeheightwidth=()=>{

        setheight1(height);
        setwidth1(width);

    }

// f1
    ()=>{ 

    }

    // f2
    e=>{}

    // f3
    e=>e

    // f4
   



  return (
    <>
    <h1>input value get {usename}</h1>

    <input type="text"  value={usename} onChange={change}  />

    <h1>set height </h1>

    <input type="text" value={height} onChange={(e)=>{setheight(e.target.value)}}  />

    <h1>set width </h1>
    <input type="text" value={width} onChange={e=>{setwidth(e.target.value)}} />


    <button onClick={changeheightwidth}>setheightandWidth</button>

    <img src={img} alt="" style={{width:width1,height:height1}} />

    {/* dropdown */}

   <h1>dropdown {dropdown} </h1>
    <select  name="cars" id="cars" value={dropdown} onChange={(e)=>{setdropdown(e.target.value)}}>  

    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>

    </select>





    </>
  )
}


// div height and width and bg color
// border radius
