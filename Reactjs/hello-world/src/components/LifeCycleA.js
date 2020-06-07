import React from 'react'

class LifeCycleA extends React.Component {
  constructor(props){
    super()
    this.state = {
      user: "name"
    }
    console.log('constructor A')
  }
  // componentWillMount() {
  //     console.log('Component will mount!')
  // }
  // componentDidMount() {
  //     console.log('Component did mount!')
  // }
  //  componentWillUpdate(){
  //   console.log('will update')
  //  }
  getDevivedStateFromProps(props, state){
    console.log('LifeCycle DevivedStateFromProp')
  }
  render() {
    console.log('render A')
      return (
         <div>
            <h3>Hello mounting methods!</h3>
         </div>
      );
   }
}

export default LifeCycleA
