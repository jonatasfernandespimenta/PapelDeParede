import React from 'react';

import { Container, PatternBox, Row } from './styles';
import { Clickable } from '../../pages/CreateYourOwn/styles';

function Patterns() {

  const handlePattern = () => {

  }

  return (
    <Container>
      <h3>Modelos</h3>
      <Row>
        <Clickable onClick={handlePattern}>
          <PatternBox>
            <img src="https://i.pinimg.com/originals/16/1a/14/161a1441e14e198d9c8a66c795f5b3bc.jpg" width={60} height={60} />
          </PatternBox>
        </Clickable>
      </Row>

    </Container>
  );
}

export default Patterns;
