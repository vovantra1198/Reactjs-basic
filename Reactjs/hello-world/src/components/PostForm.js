import React, {Component} from 'react'
import axios from 'axios'

class PostForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      name: '',
      age: ''
    }
  }
  changeHandle = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandle = e =>{
    e.preventDefault()
    axios.post('https://5eb91678bb17460016b32e84.mockapi.io/users', this.state)
          .then(response=>{
            console.log(response)
          })
  }
  render(){
    const {id, name, age} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <div>
            <input
              type="text"
              name="id"
              value={id}
              onChange={this.changeHandle}
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandle}
            />
          </div>
          <div>
            <input
              type="number"
              min="1"
              name="age"
              value={age}
              onChange={this.changeHandle}
            />
          </div>
          <button type="submit">Button</button>
        </form>
      </div>
    )
  }
}
export default PostForm
