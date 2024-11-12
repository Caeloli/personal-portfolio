import React from 'react';
import { render, screen } from '@testing-library/react';
import ResumePage from './ResumePage';

test('renders learn react link', () => {
  render(<ResumePage />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
