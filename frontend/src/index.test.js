
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './pages/About'; 

// Your test case
test('Website has "TravelGuru" as the heading', () => {

  render(<About />);

  const headingElement = screen.getByText(/TravelGuru/i);


  expect(headingElement).toBeInTheDocument();
});
