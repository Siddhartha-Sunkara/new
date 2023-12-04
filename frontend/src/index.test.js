
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './pages/About'; 
import Tours from './pages/Tours'; 

// Your test case
test('Website has "TravelNest" as the heading', () => {

  render(<About />);
  // Use the screen.getAllByText function to find all elements containing "TravelNest"
  const elementsWithText = screen.getAllByText(/TravelNest/i);

  // Assert that at least one of the elements contains the expected text
  expect(elementsWithText.length).toBeGreaterThan(0);
});


