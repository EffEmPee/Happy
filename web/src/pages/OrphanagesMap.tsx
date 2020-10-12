import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiSun, FiMoon } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  const [theme, setTheme] = useState('light-v10');

  function switchMapTheme() {
    const moon = document.getElementById('moon')
    const sun = document.getElementById('sun')

    if(theme == 'light-v10'){
      setTheme('dark-v10')

      moon?.setAttribute('display', 'none')
      sun?.setAttribute('display', 'block')
    } else {
      setTheme('light-v10')

      moon?.setAttribute('display', 'block')
      sun?.setAttribute('display', 'none')
    }
  }

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[-23.3116478,-51.1933809]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/mapbox/${theme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <button className="theme-switch" onClick={() => switchMapTheme()}>
        <FiMoon id="moon" size={32} color="#fff" display="" />
        <FiSun id="sun" size={32} color="#fff" display="none" />
      </button>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;