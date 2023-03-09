import React from 'react'
import { Button, Dropdown, Icon, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Styles from '../styles/Apartments.module.css'
import Images from 'next/image'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import Photo2 from '../public/assets/smallGallery/A2/8.jpg'
import Photo1 from '../public/assets/smallGallery/A1/10.jpg'
import Photo3 from '../public/assets/smallGallery/A3/2.jpg'

import styled from 'styled-components';



const ModalExampleScrollingContent = ( {button} ) => {
  const [open, setOpen] = React.useState(false)

  const [apartment, setApartment] = React.useState(null);
  

  const FixAllThisHit = () =>  {
    setOpen(false)
    setApartment(null)

  }

  let logicA = `${button === '3' ? 'Stúdio apartman' : '' | button === '2' ? 'Családi apartman' : '' | button === '1' ? 'Egyhálószobás apartman' : ''}`
  let logicB = `${apartment === '3' ? 'Stúdio apartman' : '' | apartment === '2' ? 'Családi apartman' : '' | apartment === '1' ? 'Egyhálószobás apartman' : ''}`


  let logicSizeA= `${button  === '3' ? '18 m2' : '' | button  === '2' ? '41 m2' : '' | button  === '1' ? '32 m2' : ''}`
  let logicSizeB= `${apartment  === '3' ? '18 m2' : '' | apartment  === '2' ? '41 m2' : '' | apartment  === '1' ? '32 m2' : ''}`

  
  let logicPhotoA = `${button === '3' ? Photo3 : '' | apartment === '2' ? Photo2 : '' | apartment === '1' ? Photo1 : ''}`
  let logicPhotoB = `${apartment === '3' ? Photo3 : '' | apartment === '2' ? Photo2 : '' | apartment === '1' ? Photo1 : ''}`


  
  const handleChange = (event) => {
    setApartment(event.target.value);
};

  return (
    <Modal
      open={open}
      onClose={FixAllThisHit}
      onOpen={() => setOpen(true)}
      trigger={<h2 className={Styles.h2}>Felszereltség</h2>}
    >
      <Modal.Header> Teljes felszereltség : {apartment === null ?  logicA : logicB }
</Modal.Header>
<Modal.Header> 
  <Box sx={{ minWidth: 50 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">További apartmanok</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={apartment}
            onChange={handleChange}
            label='További apartmanok'
          >
            <MenuItem value={'1'}>Egyhálószobás apartman</MenuItem>
            <MenuItem value={'3'}>Stúdió apartman</MenuItem>
            <MenuItem value={'2'}>Családi apartman</MenuItem>
          </Select>
        </FormControl>
      </Box>
</Modal.Header>
      <Modal.Content image scrolling>
        <div style={{marginRight:'30px'}}>
          <Images  src={button === '3' ? Photo3 : '' | button === '2' ? Photo2 : '' | button === '1' ? Photo1 : ''}
              alt="Harmony apartments"
              width={331}
              height={271}
              style={{objectFit : 'cover'}}
              />
        </div>
        <Modal.Description>
          <h3>
           Főbb tulajdonságok
          </h3>
          <div className={Styles.modal_posi}>
           <div><Icon color='green' disabled name='check' />{apartment === null ?  logicSizeA : logicSizeB }</div> <div> <Icon color='green' disabled name='check' /> Saját konyha</div>
          </div>
          <div className={Styles.modal_posi}>
          <div> <Icon color='green' disabled name='check' /></div><div> <Icon color='green' disabled name='check' /> Kertre nyíló kilátás</div> 
          </div>
          <div className={Styles.modal_posi}>
           <div><Icon color='green' disabled name='check' />{}</div> <div> <Icon color='green' disabled name='check' /> Saját konyha</div>
          </div>
          <div className={Styles.modal_posi}>
          <div> <Icon color='green' disabled name='check' /></div><div> <Icon color='green' disabled name='check' /> Kertre nyíló kilátás</div> 
          </div>
          <h3>
           Saját konyha felszereltsége
          </h3>
          <div className={Styles.modal_posi}>
           <div><Icon color='green' disabled name='check' /></div> <div> <Icon color='green' disabled name='check' /> Saját konyha</div>
          </div>
          <div className={Styles.modal_posi}>
          <div> <Icon color='green' disabled name='check' /></div><div> <Icon color='green' disabled name='check' /> Kertre nyíló kilátás</div> 
          </div>
         
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button style={{backgroundColor: '#7F7262'}} onClick={() => {
          setOpen(false)
          setApartment(null) }
            }
           primary>
          Bezár <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleScrollingContent