import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    Col,
    Row
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import PawPrint from '../assets/Paw_Print.png'

export default class PetIndex extends Component {
    render() {
      const {pets} = this.props
        return (
            <div id="pet-index-body">
                <h3 className="title">Pets</h3>
                <br />
                <Row>
                    {pets.map((pet, index) => {
                        return (
                            <Col xs="3" className="petcards">
                                <Card key={index}>
                                    <img className="pawprint" src={PawPrint}/>
                                    <CardTitle>
                                        <NavLink to={`/petshow/${pet.id}`}>
                                            {pet.name}
                                        </NavLink>
                                    </CardTitle>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}
