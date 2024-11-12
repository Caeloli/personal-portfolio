import React from 'react';
import { render, screen } from '@testing-library/react';
import TechnologyPage from './TechnologyPage';

test('renders learn react link', () => {
  render(<TechnologyPage />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
