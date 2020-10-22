import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    Col,
    Row
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class UserIndex extends Component {
    render() {
      const {users} = this.props
        return (
            <div id="user-index-body">
                <h3 className="title">User Profiles</h3>
                <br />
                <Row>
                    {users.map((user, index) => {
                        return (
                                <Col xs="3" className="usercards">
                                    <Card key={index}>
                                        <CardTitle>
                                            <NavLink to={`/usershow/${user.id}`}>
                                                {user.name}
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
