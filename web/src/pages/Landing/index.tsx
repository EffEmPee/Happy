import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import { ContentWrapper, PageLanding, Location } from './style';

import logoImg from '../../images/logo.svg';

const Landing: React.FC = () => {

  return(
    <PageLanding>
      <ContentWrapper>
        <img src={ logoImg } alt="Happy"/>
        
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </Location>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rbga(0, 0, 0, 0.6)" />
        </Link>
      </ContentWrapper>
    </PageLanding>
  );
}

export default Landing;