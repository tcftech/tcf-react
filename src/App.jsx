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



function App() {
  

  return (
    <>
      <Header/>
      <Home/>
     
       
      <br />
      <br />
      <Footer/>
    </>
  )
}

export default App
