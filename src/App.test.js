import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('App displays count of balls', () => {
  const { getByText } = render(<App />);
  const ballsEl = getByText(/balls/i);
  expect(ballsEl).toBeInTheDocument();
  expect(ballsEl).toBeVisible();
})

test('App displays count of strikes', () => {
  const { getByText } = render(<App />);
  const strikesEl = getByText(/strikes/i);
  expect(strikesEl).toBeInTheDocument();
  expect(strikesEl).toBeVisible();
})

test('App displays count of runs', () => {
  const { getByText } = render(<App />);
  const runsEl = getByText(/runs/i);
  expect(runsEl).toBeInTheDocument();
  expect(runsEl).toBeVisible();
})

test('App displays count of outs', () => {
  const { getByText } = render(<App />);
  const outsEl = getByText(/outs/i);
  expect(outsEl).toBeInTheDocument();
  expect(outsEl).toBeVisible();
})

test('App displays inning number', () => {
  const { getAllByText } = render(<App />);
  const inningEls = getAllByText(/inning/i);
  for (let i=0; i<inningEls.length; i++) {
    expect(inningEls[i]).toBeInTheDocument();
    expect(inningEls[i]).toBeVisible();
  }
  
})


test('App contains strike button', () => {
  const { getByText } = render(<App />);
  const strikeButton = getByText(/^strike$/i);
  expect(strikeButton).toBeInTheDocument();
  expect(strikeButton).toBeVisible();
})

test('App contains ball button', () => {
  const { getByText } = render(<App />);
  const ballButton = getByText(/^ball$/i);
  expect(ballButton).toBeInTheDocument();
  expect(ballButton).toBeVisible();
})

test('App contains foul button', () => {
  const { getByText } = render(<App />);
  const foulButton = getByText(/^foul$/i);
  expect(foulButton).toBeInTheDocument();
  expect(foulButton).toBeVisible();
})

test('App contains hit button', () => {
  const { getByText } = render(<App />);
  const hitButton = getByText(/^hit$/i);
  expect(hitButton).toBeInTheDocument();
  expect(hitButton).toBeVisible();
})

