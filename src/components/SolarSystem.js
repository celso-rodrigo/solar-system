import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system">
          {planets.map((planet, index) => (<PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ `${planet.name}${index}` }
          />))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
