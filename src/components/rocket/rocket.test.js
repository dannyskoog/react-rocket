import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import rocket from './rocket';

describe('<rocket />', () => {
  test('it should mount', () => {
    render(<rocket />);
    
    const rocket = screen.getByTestId('rocket');

    expect(rocket).toBeInTheDocument();
  });
});