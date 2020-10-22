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
      const {user} = this.props
        return (
            <div id="user-show-body">
                <h3 className="title">User Profile</h3>
                <br />
                <Col sm="6">
                    <Card>
                        <CardTitle>{user.name}</CardTitle>
                        <CardText>
                            Age: {user.age}<br/>
                            Address: {user.address}<br/>
                            Email: {user.email}
                        </CardText>
                        <NavLink to={`/useredit/${user.id}`}>
                            Edit profiles
                        </NavLink>
                        <hr/>
                        <NavLink to={'/petindex'}>
                            Back to pets
                        </NavLink>
                        <NavLink to={'/userindex'}>
                            Back to profiles
                        </NavLink>
                    </Card>
                </Col>
            </div>

        )
    }
}
