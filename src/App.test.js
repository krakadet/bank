import React from 'react';
import { render } from '@testing-library/react';
import MainTable from '../src/modules/main-table';

test('renders learn react link', () => {
  const { getByText } = render(<MainTable />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
