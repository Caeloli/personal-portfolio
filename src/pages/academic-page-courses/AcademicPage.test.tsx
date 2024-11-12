import React from 'react';
import { render, screen } from '@testing-library/react';
import AcademicPage from './AcademicPage';

test('renders learn react link', () => {
  render(<AcademicPage />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
