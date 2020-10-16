/* aside.app-sidebar {
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

aside.app-sidebar img {
  width: 48px;
}

aside.app-sidebar footer a,
aside.app-sidebar footer button {
  width: 48px;
  height: 48px;

  border: 0;

  background: #12AFCB;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

aside.app-sidebar footer a:hover,
aside.app-sidebar footer button:hover {
  background: #17D6EB;
} */

import styled from "styled-components"

export const AsideBar = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  z-index: 5;

  img {
    width: 48px;
  }

  footer a,
  footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: ${props => props.theme.colors.button};
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer Switch {
    margin: 0px 10px;
  }

  footer a:hover,
   footer button:hover {
    background: ${props => props.theme.colors.buttonHover};
  }
`;