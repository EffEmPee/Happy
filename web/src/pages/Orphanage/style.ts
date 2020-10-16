import styled from 'styled-components';

export const PageOrphanage = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: ${props => props.theme.colors.shapes};
  border: 1px solid ${props => props.theme.colors.textSecundary};
  border-radius: 20px;

  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
 
  button {
    border: 0;
    height: 88px;
    background: none;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    outline: none;
    
    opacity: 0.6;
  }

  button.active {
      opacity: 1;
  }

  button img {
    width: 100%;
    height: 88px;
    object-fit: cover;
    
  }
`;

export const OrphanagDetailsContent = styled.div` 
  padding: 80px;

  h1 {
    color: ${props => props.theme.colors.textSecundary};
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  p {
    line-height: 28px;
    color: ${props => props.theme.colors.textSecundary};
    margin-top: 24px;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: ${props => props.theme.colors.textSecundary};
    margin: 64px 0;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.textSecundary};
  border-radius: 20px;


  footer {
    padding: 20px 0;
    text-align: center;
}

  footer a {
    line-height: 24px;
    color: ${props => props.theme.colors.textSecundary};
    text-decoration: none;
}

 .leaflet-container {
    border-radius: 20px;
}
`;

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
  }

  div svg {
    display: block;
    margin-bottom: 20px;
  }

  div.hour {
    background: linear-gradient(149.97deg, #E6F7FB 8.13%, #ffffff 92.67%);
    border: 1px solid #B3DAE2;
    color: #5C8599;
  }

  div.open-on-weekends {
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #ffffff 91.03%);
    border: 1px solid #A1E9C5;
    color: #37C77F;
  }

  div.open-on-weekends.dont-open{
    background: linear-gradient(154.16deg, #FDF0F5 7.85%, #ffffff 91.03%);
    border: 1px solid #FFBCD4;
    color: #FF669D;
  }
`;

export const ContactButton = styled.button` 
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;
  

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
  }
  svg {
    margin: auto 16px;
  }
  :hover {
    background: #36CF82;
  }

`;