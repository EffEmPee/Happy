import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../images/map-marker.svg';


import { AsideBar } from './style';

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <AsideBar>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          {/* <Switcher toggleTheme={toggleTheme} /> */}
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </AsideBar>
  );
}