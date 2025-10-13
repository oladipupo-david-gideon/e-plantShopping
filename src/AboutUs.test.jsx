import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './AboutUs';

describe('AboutUs Component', () => {
  test('renders the main description text', () => {
    // 1. Render the component
    render(<AboutUs />);

    // 2. Find an element by the text it displays
    const descriptionElement = screen.getByText(/Welcome to Paradise Nursery, where green meets serenity!/i);

    // 3. Assert that the element is in the document
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the mission content', () => {
    render(<AboutUs />);
    
    // You can also find elements by partial text
    const missionText = screen.getByText(/passionate about bringing nature closer to you/i);
    expect(missionText).toBeInTheDocument();
  });
});