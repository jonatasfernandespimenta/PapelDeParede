import React, { useContext } from 'react';

import { useColorContext } from '../../contexts/color.context';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { Clickable } from '../../pages/CreateYourOwn/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'

import { ColorsContainer, Container, EditableColors, SvgContainer } from './styles';

function Colors() {
  const { color, setColor, colorInfo, setColorInfo } = useColorContext();

  const data = [
    {
      id: 0
    },
    {
      id: 1
    }
  ]

  const handleColorChange = (id, color) => {
    setColorInfo([...colorInfo, { id: id, color: color }])
  }



  return(
    <Container>
      <h3>Cores</h3>

      <ColorPicker width={256} height={128} color={color} onChange={setColor} hideHSV hideRGB dark />


      <ColorsContainer>
        

        {
          data.map(item => (
            <Clickable onClick={() => handleColorChange(item.id, color.hex)}>
              <EditableColors style={{ background: color.hex }} />
            </Clickable>
            
          ))
        }
        <Clickable>
          <FontAwesomeIcon icon={faSwatchbook} size={'2x'} />                       
        </Clickable>

      </ColorsContainer>
    </Container>
  );
}

export default Colors;
