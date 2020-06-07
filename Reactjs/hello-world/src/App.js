import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcom from './components/Welcom'
import {Hello} from './components/Hello'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
import NameList from './components/NameList'
import Form from './components/Form'
import LifeCycle from './components/LifeCycle'
import {UserProvider} from './components/userContext'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Person from './components/Person'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import Menu from './components/Menu'
import AddUser from './components/AddUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Menu/>
        <div>
          <Switch>
            <Route path="/about" exact component={About}/>
            <Route path="/users" exact component={User}/>
            <Route path="/" exact component={Home}/>
            <Route path="/add" component={AddUser} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
