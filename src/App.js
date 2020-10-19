import React, { Component } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css';
import Home from './pages/Home';
import PetIndex from './pages/PetIndex';
import PetShow from './pages/PetShow';
import UserNew from './pages/UserNew';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <PetIndex />
        <PetShow />
        <UserNew />
        <UserEdit />
        <NotFound />
        <Footer />
      </React.Fragment>
    )
  }
}

