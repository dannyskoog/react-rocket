import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GridFin from './grid-fin';

describe('<GridFin />', () => {
  test('it should mount', () => {
    render(<GridFin />);
    
    const gridFin = screen.getByTestId('GridFin');

    expect(gridFin).toBeInTheDocument();
  });
});