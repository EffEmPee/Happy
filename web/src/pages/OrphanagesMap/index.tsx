import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiSun, FiMoon, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker} from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';

import { AsideBar, PageMap, StyledPop, CreateOrphanage } from './style';

import api from '../../services/api';

import { ThemeContext } from 'styled-components';


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  const { title } = useContext(ThemeContext);

  return (
    <PageMap>
      <AsideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </footer>
      </AsideBar>

      <Map
        center={[-23.3116478,-51.1933809]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}  
              icon={mapIcon}
              position={[orphanage.latitude,orphanage.longitude]}
            >
              <StyledPop closeButton={false} minWidth={240} maxWidth={240}>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </StyledPop>
            </Marker>
          );
        })}
      </Map>

      {/* <Switcher onClick={() => toggleTheme()}>
        {themeIcon()}
      </Switcher> */}

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>

    </PageMap>
  );
}

export default OrphanagesMap;
