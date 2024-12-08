import React from 'react'
import LabTabs from '../taps/Taps'

export default function CourseContent() {

  let  heading={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",



}

  return (
    <>
    <section>
       <div style={heading}>
                <h1 style={{fontWeight:"bold"}}>Learn Tech from Latest Courses</h1>
                <h4>Explore 175+ Premium Courses with New Course Additions every Month.</h4>
       </div>
       
           <LabTabs />
    </section>
    </>
  )
}

