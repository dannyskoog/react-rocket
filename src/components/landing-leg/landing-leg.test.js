import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingLeg from './landing-leg';

describe('<LandingLeg />', () => {
  test('it should mount', () => {
    render(<LandingLeg />);
    
    const landingLeg = screen.getByTestId('LandingLeg');

    expect(landingLeg).toBeInTheDocument();
  });
});