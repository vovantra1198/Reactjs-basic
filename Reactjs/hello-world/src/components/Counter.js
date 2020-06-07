import React, {Component} from 'react'
import {UserConsumer} from './userContext'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.plus = this.plus.bind(this)
  }
  plus(){
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  render(){
    return (
      <div>
        <UserConsumer>
          {
            (value)=>{
              return <h1> {value} </h1>
            }
          }
        </UserConsumer>
        <div> count: {this.state.count} </div>
        <button onMouseOver={this.plus}>Click to see Our {this.state.count} Technologies</button>
      </div>
    );
  }
}
export default Counter
