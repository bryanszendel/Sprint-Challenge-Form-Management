import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import UserList from './UserList'

it('renders without crashing', () => {
  render(<App />);
  // ReactDOM.unmountComponentAtNode(div);
});

// one element, one event, and one unit test for a function

describe('<App />', () => {
  
  //element
  it('<UserForm /> component should mount and display form fields on screen', () => {
    const {getByPlaceholderText} = render(<App />)
    const username = getByPlaceholderText(/username/i)
    fireEvent.click(username)
  })

  // event
  it('<UserForm /> should submit values', () => {
    const {getByText} = render(<App />)
    const submit = getByText(/submit/i)
    fireEvent.click(submit)
  })

  //element
  it('<UserList /> should mount and display items', () => {
    const {getByText} = render(<App />)
    getByText(/items/i)
  })
  

  //function
  it('<UserList /> should render food items', () => {
    const itemData = [
      {id: 1, name: 'brisket'},
      {id: 2, name: 'ham'},
      {id: 3, name: 'hush puppies'}
    ]
    
    const comp = render(
        <UserList  items={itemData} />
    )
    const items = comp.getAllByTestId('items')
    expect(items).toHaveLength(itemData.length)
  })
})