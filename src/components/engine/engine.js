import React from 'react';
import './engine.css';

function getMiddleFlameIndices(numberOfFlames) {
  const isNumberEven = numberOfFlames / 2 === 0;

  return isNumberEven
    ? [numberOfFlames / 2 - 1, numberOfFlames / 2]
    : [Math.floor(numberOfFlames / 2)];
}

function getFlames(numberOfFlames) {
  const middleFlameIndices = getMiddleFlameIndices(numberOfFlames);

  const flamesMap = [...Array(numberOfFlames)].reduce((acc, _, index) => {
    let key = "middle";

    if (index < middleFlameIndices[0])
      key = "left";
    else if (index > middleFlameIndices[middleFlameIndices.length - 1])
      key = "right";

    return { ...acc, [key]: [...acc[key] || [], undefined] };
  }, {});

  const maxRotation = 10;
  const rotationInterval = maxRotation / flamesMap.left.length;

  return [
    ...flamesMap["left"].map((_, index) => maxRotation - (rotationInterval * index)),
    ...flamesMap["middle"].map(() => 0),
    ...flamesMap["right"].map((_, index) => -(rotationInterval + (rotationInterval * index)))
  ];
}

const Engine = () => {
  const flames = getFlames(7);
  
  return (
    <div>
      <div className="engine" data-testid="engine"></div>
      <div className="flames">
        {flames.map((val, index) => <div key={index} className="flame" style={{transform: `rotate(${val}deg)`}}></div>)}
      </div>
    </div>
  );
};

Engine.propTypes = {};

Engine.defaultProps = {};

export default Engine;
