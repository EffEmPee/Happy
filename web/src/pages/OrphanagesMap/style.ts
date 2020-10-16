import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popup } from 'react-leaflet';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }

`;

export const AsideBar = styled.aside`
  width: 440px;
  background: ${props => props.theme.colors.background};
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 43px;
    margin-top: 64px;
  }

  p {
    line-height:28px;
    margin-top:24px
  }

  footer {
    display: flex;
    flex-direction: column;
    
    line-height:24px;
  }

  footer strong {
    font-weight: 800;
  }

`;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10;

  width: 64px;
  height: 64px;
  background: ${props => props.theme.colors.primary};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  :hover {
    background: ${props => props.theme.colors.buttonHover};
  }
`;

export const StyledPop = styled(Popup)`

  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, .8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: ${props => props.theme.colors.button};
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.colors.buttonHover};
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;