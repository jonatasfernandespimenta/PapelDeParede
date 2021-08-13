import styled, {keyframes, css} from 'styled-components';

const enterAnimation = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 95%;
  bottom: 0;
  left: 0;
  background: #293039;
  animation: ${enterAnimation} 250ms ease 1 backwards;
  transition: transform 250ms ease;
  ${({ open }) => !open && css`transform: translateY(100vh);`}
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

