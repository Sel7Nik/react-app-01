import { render } from '@testing-library/react';
import MainApp from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MainApp />, div);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
