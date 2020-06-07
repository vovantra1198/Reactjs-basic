import React, { Component } from 'react'
import './mystyle.css'

class Welcom extends Component {
  constructor(props){
    super(props)
    this.state = {"show_technologies": false}
    this.see_our_technologies = this.see_our_technologies.bind(this);
  }
  see_our_technologies(){
    if(this.state.show_technologies == false){
      this.setState({"show_technologies": true})
    }
    else{
      this.setState({"show_technologies": false})
    }
  }
  render(){
         return (
             <div className="content">
               <img src={this.props.logo_url} height="250px"/>
               {this.state.show_technologies ?
                      <p>
                          <span className="tech">Python</span>
                          <span className="tech">Django</span>
                          <span className="tech">Django REST</span>
                          <span className="tech">ReactJS</span>
                          <span className="tech">Angular</span>
                          <span className="tech"> and More</span>
                          <button onClick={this.see_our_technologies}>Click to see Our Technologies</button>
                      </p>
                      :
                      <button onClick={this.see_our_technologies}>Click to see Our Technologies</button>
                  }
             </div>
         );
     }
}
export default Welcom
