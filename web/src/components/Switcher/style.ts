import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
`;


export const Switcher = styled.button`

  position: absolute;
  right: 40px;
  top: 40px;

  z-index: 10;

  width: 64px;
  height: 64px;
  background: ${props => props.theme.colors.button};
  border-radius: 20px;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  :hover {
    background: ${props => props.theme.colors.buttonHover};  
  }

`;