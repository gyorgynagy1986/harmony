import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Styles from '../styles/Apartments.module.css'
import Images from 'next/image'
import Photo1 from '../public/assets/smallGallery/1.png'
import styled from 'styled-components';



const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<h2 className={Styles.h2}>Felszereltség</h2>}
    >
      <Modal.Header>Teljes felszereltség : Két hálószobás önálló apartman
</Modal.Header>
      <Modal.Content image scrolling>
        <div style={{marginRight:'30px'}}>
          <Images  src={Photo1}
              alt="Harmony apartments"
              width={331}
              height={271} />
        </div>
        <Modal.Description>
          <h3>
           Főbb tulajdonságok
          </h3>
          <div className={Styles.modal_posi}>
           <div><Icon color='green' disabled name='check' />41 m²</div> <div> <Icon color='green' disabled name='check' /> Saját konyha</div>
          </div>
          <div className={Styles.modal_posi}>
          <div> <Icon color='green' disabled name='check' />Szobából nyíló fürdőszoba</div><div> <Icon color='green' disabled name='check' /> Kertre nyíló kilátás</div> 
          </div>
          <div className={Styles.modal_posi}>
           <div><Icon color='green' disabled name='check' />41 m²</div> <div> <Icon color='green' disabled name='check' /> Saját konyha</div>
          </div>
          <div className={Styles.modal_posi}>
          <div> <Icon color='green' disabled name='check' />Szobából nyíló fürdőszoba</div><div> <Icon color='green' disabled name='check' /> Kertre nyíló kilátás</div> 
          </div>
          <h3>
           Saját konyha felszereltsége
          </h3>
          <div className={Styles.modal_posi}>
           <div><Icon color='green' disabled name='check' />41 m²</div> <div> <Icon color='green' disabled name='check' /> Saját konyha</div>
          </div>
          <div className={Styles.modal_posi}>
          <div> <Icon color='green' disabled name='check' />Szobából nyíló fürdőszoba</div><div> <Icon color='green' disabled name='check' /> Kertre nyíló kilátás</div> 
          </div>
         
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button style={{backgroundColor: '#7F7262'}} onClick={() => setOpen(false)} primary>
          Bezár <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleScrollingContent