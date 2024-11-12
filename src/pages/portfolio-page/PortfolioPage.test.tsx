import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioPage from './PortfolioPage';

test('renders learn react link', () => {
  render(<PortfolioPage />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
