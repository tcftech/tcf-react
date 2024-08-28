import React from 'react'
import ContactForm from './ContactForm'
import img1 from './../../assets/img/mernstack.jpg'
import BasicModal from './model'

export default function Test() {
  return (
    <>
    <div class="container">
        <div class="content">
            <h1>software Training Course</h1>
            <div class="rating">
                <span>⭐ 4.8 (3,336)</span> | <a href="#">Read Reviews</a> | 5321 Learners
            </div>
            <div className='home-features'>
                    <ul class="features">
                            <li>✅ 100% Job Assistance</li>
                            <li>⏰ 2 Months / 80+ hours</li>
                            <li>👨‍🏫 Real-Time Experts as Trainers</li>
                        
                    </ul>
                    <ul class="features">
                            <li>🏫 Best Classroom/Online Training</li>
                           
                            <li>🎓 Certifications</li>
                    </ul>
            </div>
            <p>Looking for Best software Training Course in Chennai? TCF Technologys  is the No 1  software Training Institute in Chennai    offering professional training on software. Call +91 90803 03212   for  course details.</p>
        </div>
        <div class="sidebar">
            <div class="contact">
            <img src={img1} alt="Networking Course" />
                 
                 <p>Have Queries?</p>
                <a href="tel:+918270099991">📞 +91 82700 99991</a>
                {/* <button>Enquiry Now</button> */}
                 <BasicModal/>
              {/* <ContactForm/> */}

            </div>
        </div>
    </div>
    </>
  )
}
