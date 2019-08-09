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
        console.log(res.data)
        this.setState({
          items: res.data
        })
      })
      .catch(err => console.log(err.response))

  }

  render() {
    console.log('state', this.state.items)
    return (
      <div>
        {this.state.items.map((user) => {
          return <p key={user.name}>{user.name}</p>
        })}
      </div>
    )
  }
}

export default UserList;