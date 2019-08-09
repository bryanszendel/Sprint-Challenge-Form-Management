import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// one element, one event, and one unit test for a function

describe('<App />', () => {
  const {getByText} = render(<App />)
  it('<UserForm /> component should mount and display form fields on screen', () => {
    getByText(/username/)
  })
  it('<UserList /> should mount and display food items on screen', () => {
    getByText(/items/i)
  })

})