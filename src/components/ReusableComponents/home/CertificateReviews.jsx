
import { certificateReviewsimg } from '../../../assets/images/images';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import React from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];



function DarkVariantExample() {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };



  return (
    <>
      <div className='carousel-parent-certificate'>
        <Box sx={{ flexGrow: 1 }} className='certificate-Carousel'>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >

          




            <div style={{ display: "flex" }} >
              <div  style={{ display: "flex",alignItems:"center" ,justifyContent:"center",flexDirection:'column'}} >
                  <h2>Our Awards & Achievements</h2>
               <img src={certificateReviewsimg.image4}alt="" />
                <h2>Broke the record most users taking online computer programming in lesson in 24 hrs</h2>
              </div>
              <div >
                <img src={certificateReviewsimg.image1} style={{ height: "350px", width: "400px" }} />
              </div>
            </div>




            <div style={{ display: "flex" }} >
              <div  style={{ display: "flex",alignItems:"center" ,justifyContent:"center",flexDirection:'column'}} >
                  <h2>Our Awards & Achievements</h2>
               <img src={certificateReviewsimg.image4}alt="" />
                <h2>Broke the record most users taking online computer programming in lesson in 24 hrs</h2>
              </div>
              <div >
                <img src={certificateReviewsimg.image1} style={{ height: "350px", width: "400px" }} />
              </div>
            </div>


            <div style={{ display: "flex" }} >
              <div  style={{ display: "flex",alignItems:"center" ,justifyContent:"center",flexDirection:'column'}} >
                  <h2>Our Awards & Achievements</h2>
               <img src={certificateReviewsimg.image4}alt="" />
                <h2>Broke the record most users taking online computer programming in lesson in 24 hrs</h2>
              </div>
              <div >
                <img src={certificateReviewsimg.image1} style={{ height: "350px", width: "400px" }} />
              </div>
            </div>


          </AutoPlaySwipeableViews>
          {/* <MobileStepper
          sx={{backgroundColor:"rgba(226, 226, 226, 0.556)"}}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        /> */}
        </Box>

      </div>
    </>
  );
}

export default DarkVariantExample;