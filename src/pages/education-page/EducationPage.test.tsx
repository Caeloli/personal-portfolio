import React from 'react';
import { render, screen } from '@testing-library/react';
import EducationPage from './EducationPage';

test('renders learn react link', () => {
  render(<EducationPage />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
