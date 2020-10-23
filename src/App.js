import React, { Component } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css';
import Home from './pages/Home';
import PetIndex from './pages/PetIndex';
import PetShow from './pages/PetShow';
import UserIndex from './pages/UserIndex';
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
      pets: [],
      users: []
    }
  }

  componentDidMount(){
    this.userIndex()
    this.petsIndex()
  }

  userIndex = () => {
    fetch("http://localhost:3000/users")
    .then(response => {
      return response.json()
    })
    .then(usersArray => {
      this.setState({ users: usersArray})
    })
    .catch(errors => {
      console.log("index errors:", errors);
    })
  }

  petsIndex = () => {
    fetch("http://localhost:3000/pets")
    .then(response => {
      return response.json()
    })
    .then(petsArray => {
      this.setState({ pets: petsArray})
    })
    .catch(errors => {
      console.log("index errors:", errors);
    })
  }

  createNewUser = (newuser) => {
    fetch("http://localhost:3000/users", {
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Invalid Submission")
      }
      return response.json()
    })
    .then(payload => {
      this.userIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors);
    })
  }

  updateUser = (user, id) => {
    return fetch(`http://localhost:3000/users/${id}`, {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Invalid Submission")
      }
      return response.json()
    })
    .then(payload => {
      this.userIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors);
    })
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
            path="/userindex"
            render={(props) => <UserIndex users={this.state.users} />}
          />
          <Route
            exact path="/useredit/:id"
            render={(props) => {
              let id = props.match.params.id
              let user = this.state.users.find(user => user.id === parseInt(id))
              return (
                <UserEdit
                  updateUser={this.updateUser}
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
