import { useState } from 'react'

import './ContactForm.css'
import { useFormik } from 'formik'
import Popup from './Pouup';


const validate=values=>{
  const error={};
  // console.log(values.firstname);
    if (!values.firstname) {
      error.firstname="*required"
    }else if (values.firstname.length>8) {
      error.firstname="*must be 8 character or less"
    }
    if (!values.laststname) {
      error.laststname="*required"
    }else if (values.laststname.length>8) {
      error.lastname="*must be 8 character or less"
    }
    if (!values.email) {
      error.email="*required"
    }else if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
      // error.email="*invalid email address";
    }else{
      error.email="*invalid email address";
    }


    if (!values.password) {
      error.password="*required";
    }
    else  if (values.password.length>11) {
      error.password="*valid Mobile Number ";
    }

    if (!values.confirmpassword) {
      error.confirmpassword="*reguired";
    }

    return error
}

let jobTitle=['Job Title',
              'QA Engineer',
              'Devops Engineer',
              'FullStack Development',
              'Software Testing',
              'Front-End Development',
              'Data Science',
              'AWS Cloud Engineer'
             ]

function ContactForm() {
const  [bool,setbool]=useState(0);

 const formik=useFormik({
  initialValues : {
    firstname : '',
    laststname : '',
    email : '',
    password : '',
    confirmpassword : '',
  },
  validate,
  onSubmit:value=>{
    // alert(`hello ! ${value.firstname} are succesfully  signup`)
    if (bool) {
      setbool(0)
    }else{
      setbool(1)
      console.log(value);
      
    }
  }
 } 
 )
 


  return (
    <>
     <div className='main'>
      <div className='signup-form'>
        <h2 className='signIn-here'>Sign Up Here </h2>
        <form  onSubmit={formik.handleSubmit}>
          
          <input type="text" placeholder='Name...' name='firstname'  autoComplete='off' onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur}/>
              
              {
              formik.touched.firstname && formik.errors.firstname?<span>{formik.errors.firstname}</span>:null
              }


          <input type="text" placeholder='Email...' name='email'   autoComplete='off' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>

          {
            formik.touched.email && formik.errors.email?<span>{formik.errors.email}</span>:null
          }
          {/*  */}
          <input type="text" placeholder='Graduation Year' name='laststname'  autoComplete='off' onChange={formik.handleChange} value={formik.values.laststname} onBlur={formik.handleBlur} />
          
          {
          formik.touched.laststname&& formik.errors.laststname?<span>{formik.errors.laststname}</span>:null
          }

          <input type="number" placeholder='Mobile Number' name='password'  autoComplete='off' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>

          {
          formik.touched.password && formik.errors.password?<span>{formik.errors.password}</span>:null
          }

          {/* <input type="" placeholder='Confirm Password...' name='confirmpassword'  autoComplete='off' onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur} /> */}

        
             
               <select name='confirmpassword' id="" onChange={formik.handleChange} value={formik.values.confirmpassword}  >
                    {
                      jobTitle.map(option=> <option value={option}>{option}</option>)
                    }
              </select>
       
           
          

          <input type="submit" className='form-submit' value="submit"   />
        </form>
      </div>
     </div>
     <div className='message'>
      {bool ? (<Popup onclick={formik.handleSubmit}/>):null}
     </div>
    </>
  )
}
export default ContactForm
