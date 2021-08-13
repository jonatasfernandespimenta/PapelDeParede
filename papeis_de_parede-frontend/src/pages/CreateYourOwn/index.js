import React, { useState, useRef } from 'react';

import { Container, Wallpaper, Menu, Customizator, IconsContainer, Clickable } from './styles';

import { Texture } from '@material-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faPalette, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../components/Modal';
import Inspiration from '../../components/Inspiration';
import Patterns from '../../components/Patterns';
import Colors from '../../components/Colors';

function CreateYourOwn() {
  const modalContainerRef = useRef(null);  // isso define onde o modal vai aparecer
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [screen, setScreen] = useState(0);

  const handleModal = (screen) => {
    setIsModalVisible(true);
    setScreen(screen);
  }

  const renderModalContent = () => {
    if(screen === 0) {
      return <Inspiration />;
    }

    if(screen === 1) {
      return <Patterns />;
    }

    if(screen === 2) {
      return <Colors />;
    }

  }

  return (
    <>
      <Container>
        <Wallpaper ref={modalContainerRef}>
          <img src="https://i.ytimg.com/vi/q2KCJ6hL09U/hqdefault.jpg" width={400} height={250} />
        </Wallpaper>

        <Customizator>

          <Modal target={modalContainerRef.current} visible={isModalVisible} onClose={() => setIsModalVisible(false)}>
            {renderModalContent()}
          </Modal>

          <Menu>
            <IconsContainer>
              <Clickable onClick={() => handleModal(0)}>
                <FontAwesomeIcon icon={faLightbulb} size={'2x'} />
              </Clickable>

              <Clickable onClick={() => handleModal(1)}>
                <Texture style={{ fontSize: 40 }} />
              </Clickable>

              <Clickable onClick={() => handleModal(2)}>
                <FontAwesomeIcon icon={faPalette} size={'2x'} />                
              </Clickable>

              <Clickable>
                <FontAwesomeIcon icon={faCartPlus} size={'2x'} />                
              </Clickable>

              <Clickable>
                <FontAwesomeIcon icon={faCartPlus} size={'2x'} />
              </Clickable>

            </IconsContainer>
          </Menu>
        </Customizator>
      </Container>
    </>
  );
}

// aaaa entendi agora

export default CreateYourOwn;
