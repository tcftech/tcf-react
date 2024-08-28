import React from 'react'

import img1 from '../../../assets/img/tabs/c1.jpg'
import { Col, Container, Row } from 'react-bootstrap'

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const ResponsiveImage = styled('img')(({ theme }) => ({
    width: '100%',  // Makes the image responsive
    height: '100%', // Maintains the aspect ratio
    objectFit: 'cover', // Ensures the image covers the container
    [theme.breakpoints.down('sm')]: {
      // Adjustments for small screens
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      // Adjustments for medium screens and up
      width: '50%', // Example width for larger screens
    },
    [theme.breakpoints.up('lg')]: {
        // Adjustments for large screens
        width: '80%', // Increase width for larger screens
      }

    
  }));

  let section = {
    Padding:"30%",
   
  }

 

export default function Content1() {
  return (
    <>
    <section style={{...section}}>
            <Container >
                <Row>
                    <Col lg={6} sm={12}>

                                        <Box
                                            component="div"
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: 'auto',
                                                backgroundColor: 'white', // Background color for the container
                                            }}
                                        >
                                                <ResponsiveImage src={img1}   alt="Responsive Image" />
                                                {/* <img src={img1}  /> */}
                                        </Box>
                        
                    </Col>
                
                    <Col lg={6} sm={12} >

                          <Box
                          component="div"
                          sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 'auto',
                          backgroundColor: 'white', // Background color for the container
                          padding:"20%"
                          }}
                                        >
                                               
                                 <div >
                                                            <h3 >Why Choose Us?</h3>
                                                            <p >
                                                                At TCF Technologies, we pride ourselves on providing an unparalleled learning experience
                                                            </p>
                                                            <ul>
                                                                <li> <span><span class="why-choose-lines">Experienced Instructors:</span> Learn from industry experts with years of real-world experience</span></li>

                                                                <li> <span> <span class="why-choose-lines">Hands-on Learning:</span> Engage in practical, project-based learning to apply your skills immediately.</span></li>

                                                                <li> <span> <span class="why-choose-lines">Flexible Schedules:</span> Choose from weekday, weekend, and evening classes to fit your busy life.</span></li>

                                                                <li> <span> <span class="why-choose-lines">Career Support:</span>  Benefit from resume workshops, interview preparation, and job placement assistance</span></li>
                                                            </ul>
                                                
                                 </div>
                          </Box>
                    </Col>
                </Row>

            </Container>

    </section>

           

     
    </>
  )
}
