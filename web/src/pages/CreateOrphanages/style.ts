import styled from "styled-components";

export const PageCreateOrphanage = styled.div`
  display: flex;
  main {
    flex: 1;
  }
`;

export const CreateOrphanageForm = styled.form `
  width: 700px;
  margin: 64px auto;

  background: ${props => props.theme.colors.shapes};
  border: 1px solid ${props => props.theme.colors.textSecundary};
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset {
    border: 0;
  }
  fieldset + fieldset {
    margin-top: 80px;
  }

  fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: ${props => props.theme.colors.textSecundary};
    font-weight: 700;

    border-bottom: 1px solid ${props => props.theme.colors.textSecundary};
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid ${props => props.theme.colors.textSecundary};
    border-radius: 20px;  
  }
`;

export const InputBlock = styled.div `
  margin-top: 24px;

  label {
    display: flex;
    color: ${props => props.theme.colors.textSecundary};
    margin-bottom: 8px;
    line-height: 24px;
  }

  label span {
    font-size: 14px;
    color: ${props => props.theme.colors.textSecundary};
    margin-left: 24px;
    line-height: 24px;
  }

  input, textarea {
    width: 100%;
    background: ${props => props.theme.colors.shapes2};
    border: 1px solid ${props => props.theme.colors.textSecundary};
    border-radius: 20px;
    outline: none;
    color: ${props => props.theme.colors.textSecundary};
  }

  input {
    height: 64px;
    padding: 0 16px;
  }
  
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
  
  input[type="file"] {
    display: none;
  }
`;

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;

  div {
    position: relative;
  }
  div button {
    width: 100%;
    height: 96px;
    border: 2px dotted #A4031F;
    border-radius: 20px;
    cursor: pointer;
    background: none;
    opacity: 0;
    transition: .2s;

    position: absolute;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div button:hover {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;

    transition: .2s;
  }


  div button:hover+img{
    opacity: 0.3;
  }


`;

export const NewImages = styled.label`
  height: 95px;
  background: ${props => props.theme.colors.shapes2};
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  

  button {
  height: 64px;
  background: ${props => props.theme.colors.shapes2};
  border: 1px solid #D3E2E5;
  color: #5C8599;
  cursor: pointer;
}

 button.active {
  background: ${props => props.theme.colors.textSecundary};
  border: 1px solid #A1E9C5;
  color: #37C77F;
}

 button:first-child {
  border-radius: 20px 0px 0px 20px;
}

 button:last-child {
  border-radius: 0 20px 20px 0;
  border-left: 0;
}

`;


export const ConfirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: ${props => props.theme.colors.text};
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;


 svg {
  margin-right: 16px;
  } 

  :hover {
  background: #36CF82;
  }
`;