import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the component showcase heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Component Showcase/i);
  expect(headingElement).toBeInTheDocument();
});