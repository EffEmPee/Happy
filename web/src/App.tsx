import React from 'react';

import 'leaflet/dist/leaflet.css'

import Routes from './routes'
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import { Switcher } from './components/Switcher/style';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const themeIcon = () => {
    if (theme.title === 'light') {
      return (
        <FiMoon id="moon" size={32} color="#fff" />
      )
    }
      else return (
        <FiSun id="sun" size={32} color="#fff" />
      )
  };


  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Switcher onClick={() => toggleTheme()}>
          {themeIcon()}
      </Switcher>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
