import React from 'react'
import axios from 'axios'

class PostList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    axios.get('https://5eb91678bb17460016b32e84.mockapi.io/users')
         .then(response =>{
            this.setState({
              users: response.data
            })
          })
         .catch(err=>{
              console.log(err)
          })
  }
  render(){
    const { users } = this.state
    return (
      <div>
        List of Users
        {
          users.length ? users.map(user => <div key={user.id}> {user.name} </div>): null
        }
      </div>
    )
  }
}
export default PostList
