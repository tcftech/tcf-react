import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import ContactForm from './ContactForm';

import Fade from '@mui/material/Fade';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let button={
      backgroundColor:'purple',color:"black",opacity:0.9,'&:hover': {
      backgroundColor: 'purple', // Keep the same background color on hover
      opacity: 1,
         // Keep the same opacity on hover
    },
  }


  return (
    <div>
      <Button onClick={handleOpen} sx={{...button}} >Enquiry Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Fade in={open}>
              <Box sx={style}>
                    <ContactForm/>
              </Box>
        </Fade>
      </Modal>
    </div>
  );
}
