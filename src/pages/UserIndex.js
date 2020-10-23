import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    Col,
    Row
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


export default class UserIndex extends Component {
    render() {
        const {users} = this.props
        return (
            <div id="user-index-body">
                <h3 className="title">User Profiles</h3>
                <br />
                <Row>
                    {users && users.map((user, index) => {
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

UserIndex.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      address: PropTypes.string,
      email: PropTypes.string  
    }).isRequired
}