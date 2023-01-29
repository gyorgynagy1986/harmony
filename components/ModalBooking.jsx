import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Styles from '../styles/Contact.module.css'
import Link from 'next/link'
import booking from '../public/assets/booking.svg'
import szallas from '../public/assets/szallas.svg'
import Image from 'next/image'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p onClick={handleOpen}>FOGLALÁS</p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             <b> Kedves Érdeklődő!</b> <br/><br/>
              A lenti linkek egyikén gyorsan és egyszerűen tud foglalni. Ha bármi kérdése felmerülne, kérjük vegye fel velünk a kapcsolatot 😊 
            <div className={Styles.imageContainer} >
                  <Link href="https://www.booking.com/Share-c6ODDK">
                      <Image  className ={Styles.booking}  src={booking} alt={'logos, bookind and szallas.hu'} />
                  </Link>
                  <Link href="https://szallas.hu/harmony-apartments-morahalom?gclid=Cj0KCQiAz9ieBhCIARIsACB0oGJTjxpl3sh3C1NqB7aviswXP18yktaFereEIDgoPI8SW8eiw0V71MIaAok5EALw_wcB&utm_source=clipboard&utm_medium=site&utm_campaign=share">
                      <Image  className ={Styles.szallas} src={szallas} alt={'logos, bookind and szallas.hu'} />
                  </Link>
            </div> 
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
            6782 Mórahalom, <br/>
            Szegedi út 20. Magyarország <br/>
            Tel: +36 70 884 0221
            
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
