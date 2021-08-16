import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
`;

export const PatternBox = styled.div`
  border: 2px solid white;
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
