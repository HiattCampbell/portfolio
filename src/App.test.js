import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './components/appComponents/App';

test.each([
  ['/about', 'About'],
  ['/portfolio', 'Select Work'],
  ['/contact', 'Work with Me'],
])('renders the page at %s', (path, title) => {
  render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument();
});

test('navigation links use clean domain paths', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getAllByRole('link', { name: 'About' }).some(link => link.getAttribute('href') === '/about')).toBe(true);
});
