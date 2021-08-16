import React, { useState, useRef } from 'react';

import { Container, Wallpaper, Menu, Customizator, IconsContainer, Clickable } from './styles';

import { Texture } from '@material-ui/icons';

import { useColorContext } from '../../contexts/color.context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faPalette, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../components/Modal';
import Inspiration from '../../components/Inspiration';
import Patterns from '../../components/Patterns';
import Colors from '../../components/Colors';

import {ReactComponent as BgSvg} from '../../assets/wallpaper-3.svg';


function CreateYourOwn() {
  const { color } = useColorContext();

  const modalContainerRef = useRef(null);
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
        <Wallpaper ref={modalContainerRef} color={color}>
          <BgSvg />
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
