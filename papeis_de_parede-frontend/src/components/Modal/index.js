import React, {useState, useMemo, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Clickable } from '../../pages/CreateYourOwn/styles';
import { Close } from '@material-ui/icons';

import { Container } from './styles';

// visible vc vai passar, o open aqui dentro é pra controlar se o componente ta montado
function Modal({ visible, target, onClose, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(visible) {
      setOpen(true);
    } else {
      setTimeout(() => setOpen(false), 250); // tempo da animação de saída
    }
  }, [visible]);

  if(!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <Container open={visible}>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Clickable onClick={onClose} style={{ position: 'absolute'}}>
            <Close />
          </Clickable>
        </div>
        {children}
      </div>
    </Container>
  , target);
}

export default Modal;
