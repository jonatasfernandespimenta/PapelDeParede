import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

`;

export const ColorsContainer = styled.div`
  display: flex;
  margin-top: 10%;
  flex-wrap: wrap;
`;

export const EditableColors = styled.div`
  border: 1px solid white;
  height: 40px;
  width: 40px;
  margin: 5px;
`;