import React from 'react';
import './rocket.css';
import GridFin from '../grid-fin/grid-fin';
import LandingLeg from '../landing-leg/landing-leg';
import Engine from '../engine/engine';

const rocket = () => (
  <div className="rocket" data-testid="rocket">
    <div className="second-stage">
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
    <div className="first-stage">
      <div className="top"></div>
      <div className="bottom">
        <GridFin />
        <GridFin />
        <div className="logo">SPACEX</div>
        <LandingLeg />
        <LandingLeg />
      </div>
      <div className="engines">
        <Engine />
        <Engine />
        <Engine />
      </div>
    </div>
  </div>
);

rocket.propTypes = {};

rocket.defaultProps = {};

export default rocket;
