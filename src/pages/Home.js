import React, { Component } from 'react';
import {
    Jumbotron,
    Container
} from 'reactstrap'
import PetLogo from '../assets/petsLogo.png'
export default class Home extends Component {
    render() {
        return (
            <div id="home-body">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1>Pet Tinder</h1>
                        <img id="petlogo" alt="pet finder logo" src={PetLogo}/>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}