import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class PetIndex extends Component {
    render() {
        return (
            <div id="pet-index-body">
            <React.Fragment>
                <h3>Pets</h3>
                <br />
                <Col sm="6">
                    {this.props.pets.map((pet, index) => {
                        return (
                            <Card key={index}>
                                <CardTitle>
                                    <NavLink to={`/petshow/${pet.id}`}>
                                        {pet.name}
                                    </NavLink>
                                </CardTitle>
                            </Card>

                        )
                    })}
                </Col>
            </React.Fragment>
            </div>
        )
    }
}