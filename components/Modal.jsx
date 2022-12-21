import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Styles from '../styles/Apartments.module.css'



const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<h2 className={Styles.h2}>Felszereltség</h2>}
    >
      <Modal.Header>Teljes felszereltség</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/static/optimized/rev-6567cf4/online-decorating/wp-content/uploads/2020/08/Modern-Apartment-Decor-.jpg' wrapped />

        <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>

          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
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