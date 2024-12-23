import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HolidayVillage } from '@mui/icons-material';
import Home from './components/pages/Home';
import Test from './components/ReusableComponents/test';
import SpeechToText from './SpeechRecognition';
import DeepgramExample from './deepgramSpeech';
import AssemblyAIExample from './Assembly';
import Ex1 from './ex1';
import Button from './example/button';

import img1 from '../src/assets/images/image1.png'
import Imgcopmponents from './img';
import img3 from './assets/img/about.jpg'
import Ex2 from './Ex2';
import PropsExample from './props';
import Props2 from './props2';
import Usestate from './usestate';
import Inputvalueget from './inputvalueget';
import Inputbox from './example/inputbox';
import Objectbased from './example/objectbased';

import Array1 from './example/array';
import Imageupload from './imageupload';



function App() {
  
  

  return (
    <>
      {/* <Header/>
      <Home/>
     
      
       
      <br />
      <br />
      <Footer/> */}
      {/* <SpeechToText/> */}
      {/* <br /><br /><br /><br /><br /><br /> */}
      {/* <DeepgramExample/> */}
      {/* <h1>{w}</h1>
      <Ex1 name="react" num="77" />
      <Ex1 name="Angular"/>
      <Ex1 name="vuejs"/> */}
{/* // npm create vite@latest
// cd projectname
// npm install  */}

      {/* <Button value="submit" h="100px" w="300px" bg="red"/>

      <Button value="register" h="100px" w="300px" bg="blue"/>
      <Imgcopmponents  path={img1} /> */}


      {/* <Ex1/>
      <Ex1/>
      <Ex1/>
      <Ex1/>
      <Ex1/>

      <img src={img3} alt="" /> */}

      {/* <Ex2 name="ex1" im1={img3} typein="password"/> */}
      {/* <Ex2 name="ex2" im1={img1}/> */}

      {/* <PropsExample a={2} b={7} img={img3} color="red"/>
      <PropsExample a={5} b={7} img={img1} color="green"/> */}


      

      {/* <Props2 name="exmple 45" bg="red" img={img3} w="800px" inputtype="text"/>
      <Props2 name="hiii ***********"  bg="yellow" img={img1} inputtype="password"/> */}
    
{/* <Usestate/> */}
{/* <Inputvalueget/> */}
 {/* <Inputbox/> */}

 {/* <Array1/> */}
 <Imageupload/>

    </>
  )
}

export default App

// login 
// user name 
// password
//button - login 

// register 
// create user name 
// create password 
// button - register 


// react hooks 
// usestate ,useffect 
//
