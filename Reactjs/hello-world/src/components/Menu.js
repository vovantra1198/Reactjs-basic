import React, { PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './menu.css';
class Menu extends React.Component {
  state ={
    active: false
  }
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className="nav-item {this.state.active && 'active'}"
      onClick={ () => this.setState({active: !this.state.active}) }>
                  <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/users">Users </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/about">About </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

export default Menu;
