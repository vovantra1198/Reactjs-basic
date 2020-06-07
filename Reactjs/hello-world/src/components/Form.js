import React, {Component}  from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }
  handleUserNameChange = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  handleCommentChange = (event) =>{
    this.setState({
      comments: event.target.value
    })
  }

  handleAlertInfor = (event) => {
    alert(`${this.state.username}  ${this.state.comments}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleAlertInfor}>
        <div>
          <label>Username </label>
          <input type="text" value={this.state.value} onChange={this.handleUserNameChange}/>
          <label>Comments </label>
          <input type="text" value={this.state.comments} onChange={this.handleCommentChange}/>
          <button type="submit"> Submit </button>
        </div>
      </form>
    )
  };



}

export default Form;
