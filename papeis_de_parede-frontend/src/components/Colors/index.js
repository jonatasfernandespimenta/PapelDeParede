import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { useColorContext } from '../../contexts/color.context';

import { ColorPicker, useColor } from "react-color-palette";

import "react-color-palette/lib/css/styles.css";
import { Clickable } from '../../pages/CreateYourOwn/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'

import { ColorsContainer, Container, EditableColors, SvgContainer } from './styles';

function Colors() {
  const { color, setColor, colorInfo, setColorInfo } = useColorContext();

  const [id, setId] = useState(0);

  const data = [
    {
      id: 0
    },
    {
      id: 1
    }
  ]

  const handleColorChange = (colorValue) => {
    setColor(colorValue);
    setColorInfo((old) => {
      if(old.find(item => item.id === id)) {
        return old.map(c => c.id === id ? ({ ...c, color: colorValue.hex }) : c);
      }

      return [...old, { id, color: colorValue.hex }];
    });
  }

  const Buttons = useCallback(() => {
    return <>
      {data.map(item => (
        <Clickable onClick={() => setId(item.id)}>
          <EditableColors style={{ background: colorInfo.find(c => c.id === item.id)?.color || 'black' }} />
        </Clickable>
      ))}
    </>
  }, [data, colorInfo]);

  return(
    <Container>
      <h3>Cores</h3>

      <ColorPicker
        width={256}
        height={128}
        color={color}
        onChange={handleColorChange}
        hideHSV
        hideRGB
        dark
      />

      <ColorsContainer>
        <Buttons />
        <Clickable>
          <FontAwesomeIcon icon={faSwatchbook} size={'2x'} />                       
        </Clickable>
      </ColorsContainer>
    </Container>
  );
}

export default Colors;
