import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Learn from Gamil text twice', () => {
  render(<App />);
  const elements = screen.getAllByText(/learn from gamil/i);
  expect(elements).toHaveLength(2);
});


test('renders Learn from Gamil text twice', () => {
  render(<App />);
  const elements = screen.getAllByText(/learn from gamil/i);
  expect(elements).toHaveLength(2);
});



