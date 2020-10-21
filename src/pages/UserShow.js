import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class UserShow extends Component {
    render() {
        return (
            <div id="user-show-body">
                <h3>User Profile</h3>
                <br />
                <Col sm="6">
                    <Card>
                        <CardTitle>{this.props.user.name}</CardTitle>
                        <CardText>
                            Age: {this.props.user.age}<br/>
                            Address: {this.props.user.address}<br/>
                            Email: {this.props.user.email}
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