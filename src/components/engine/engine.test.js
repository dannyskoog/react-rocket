import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import engine from './engine';

describe('<engine />', () => {
  test('it should mount', () => {
    render(<engine />);
    
    const engine = screen.getByTestId('engine');

    expect(engine).toBeInTheDocument();
  });
});