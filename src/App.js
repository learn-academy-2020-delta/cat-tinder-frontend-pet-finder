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
import mockUsers from './mockUsers.js'

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
      pets: mockPets,
      users: mockUsers
    }
  }

  createNewUser = (newuser) => {
    console.log(newuser)
  }

  editUser = (edituser, id) => {
    console.log("edituser:", edituser)
    console.log("id:", id)
  }

  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            path="/petindex"
            render={(props) => <PetIndex pets={this.state.pets} />}
          />
          <Route
            path={"/petshow/:id"}
            render={(props) => {
              let id = props.match.params.id
              let pet = this.state.pets.find(pet => pet.id === parseInt(id))
              return (
                <PetShow pet={pet} />
              )
            }}
          />
          <Route
            path="/usernew"
            render={(props) => <UserNew createNewUser={this.createNewUser} />}
          />
          <Route
            exact path="/useredit/:id"
            render={(props) => {
              let id = props.match.params.id
              let user = this.state.users.find(user => user.id === parseInt(id))
              return (
                <UserEdit
                  editUser={this.editUser}
                  user={user}
                />
              )
            }}
          />
          <Route
            path="/usershow/:id"
            render={(props) => {
              let id = props.match.params.id
              let user = this.state.users.find(user => user.id === parseInt(id))
              return (
                <UserShow user={user}/>
              )
            }}
          />
          <Route
            component={NotFound}
          />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
