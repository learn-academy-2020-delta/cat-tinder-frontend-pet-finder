import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class PetShow extends Component {
    render() {
      const {pet} = this.props
        return (
            <div id="pet-show-body">
                <h3 className="title">{pet.name}</h3>
                <br />
                <Col sm="6">
                    <Card>
                        <CardText>
                            Hello, I am {pet.age} years old. I enjoy {pet.enjoys}.
                                </CardText>
                        <NavLink to={'/petindex'}>
                            Back to pets
                        </NavLink>
                    </Card>
                </Col>
            </div>
        )
    }
}
