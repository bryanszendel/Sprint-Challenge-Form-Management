import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }


  componentDidMount() {
  
    axios
      .get('http://localhost:5000/api/restricted/data')
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => console.log(err.response))

  }

  render() {
    return (
      <div className="items-container">
        <h1>Items</h1>
        {this.state.items.map((user) => {
          return <p key={user.name} data-testid="items">{user.name}</p>
        })}
      </div>
    )
  }
}

export default UserList;