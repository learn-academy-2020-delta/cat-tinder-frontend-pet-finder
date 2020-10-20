import React, { Component } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css';
import Home from './pages/Home';
import PetIndex from './pages/PetIndex';
import PetShow from './pages/PetShow';
import UserNew from './pages/UserNew';
import UserEdit from './pages/UserEdit';
import UserShow from './pages/UserShow';
import NotFound from './pages/NotFound';
import mockPets from './mockPets.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: mockPets
    }
  }

  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/petindex" component={ PetIndex } />
          <Route path="/petshow/:id" component={ PetShow } />
          <Route path="/usernew" component={ UserNew } />
          <Route path="/useredit/:id" component={ UserEdit } />
          <Route path="/usershow/" component={ UserShow } />
          <Route component={ NotFound }/>
        </Switch>

        <Footer />
      </Router>
    )
  }
}
