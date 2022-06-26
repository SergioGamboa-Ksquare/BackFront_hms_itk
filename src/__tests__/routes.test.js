import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
const App = require('../App')
import { createMemoryHistory } from 'history';

describe('ButtonLogin', () => {
  test('should pass', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
     <Router>
      <App /> 
     </Router>
      
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('about us'));
    expect(history.location.pathname).toBe('/about-us');
  });
});