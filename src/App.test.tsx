import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'; // Ensure this line is present in your test file

it('renders CineFlix movie app title', () => {
  render(<App />);
  const linkElement = screen.getByText('CineFlix');
  expect(linkElement).toBeInTheDocument();
});
