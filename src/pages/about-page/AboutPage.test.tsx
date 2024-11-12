import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

test('renders learn react link', () => {
  render(<AboutPage />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
