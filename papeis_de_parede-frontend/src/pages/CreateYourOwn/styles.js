import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wallpaper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  svg {
    .st0 {
      fill: ${({ color }) => color.hex} !important;
    }

    .st1 {
      fill: ${({ color }) => color.hex} !important;
    }
  }
`;

export const Customizator = styled.div`
  background: transparent;
  height: 90%;
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  border-top: 1px solid white;
  width: 100%;
  height: 10%;
  color: white;
  bottom: 0px;
  background: #293039;
  position: absolute;
`;

export const IconsContainer = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Clickable = styled.button`
  border: 0px;
  background: transparent;
  color: white;
  cursor: pointer;
`;
