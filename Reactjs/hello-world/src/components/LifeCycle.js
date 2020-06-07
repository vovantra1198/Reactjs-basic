import React from 'react'
import LifeCycleA from './LifeCycleA'
class LifeCycle extends React.Component {
  constructor(props){
    super()
    this.state = {
      user: 'name'
    }
    console.log('constructor')
  }
  changeState = ()=>{
    this.setState({
      user: 'heelo'
    })
  }
  componentWillMount() {
      console.log('Component will mount!')
  }
  componentDidMount() {
      console.log('Component did mount!')
  }
  componentWillUpdate(){
    console.log('will update')
  }

  getDevivedStateFromProps(props, state){
    console.log('LifeCycle DevivedStateFromProp')
  }
  shouldComponentUpdate(){
    console.log('LifeCycle shouldComponentUpdate')
    return true
  }
  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('getSnapshotBeforeUpdate')
  // }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
      return (
         <div>
            <h3>Hello mounting methods!</h3>
            <button onClick={this.changeState} > Change State  </button>
            <LifeCycleA/>
         </div>
      );
   }
}

export default LifeCycle
