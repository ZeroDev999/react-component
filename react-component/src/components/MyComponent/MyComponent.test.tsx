import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    render(<MyComponent />);
    const element = screen.getByTestId('my-component');
    expect(element).toBeInTheDocument();
  });

  it('displays the correct text when passed as a prop', () => {
    const testText = 'Hello, World!';
    render(<MyComponent text={testText} />);
    const element = screen.getByText(testText);
    expect(element).toBeInTheDocument();
  });

  // Add more tests as needed
});