import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import GraphChart from '../components/Dashboard/GraphChart';
import Greeting from '../components/Dashboard/Greeting';

describe('App First Render', () => {
  it('renders correctly without crashing', () => {
    render(<App />);

    expect(screen.getByTitle('dashboard-body')).toBeDefined();
  });
});

test('Loads and displays greeting', () => {
  render(<Greeting />);

  expect(screen.getByRole('greeting')).toHaveTextContent(
    /good morning, Ernest ⛅/i
  );
});

test('Line graph displays error message if graph data isn`t passed in', () => {
  render(<GraphChart />);

  expect(screen.getByRole('error-component')).toHaveTextContent(
    /error fetching data/i
  );
});
