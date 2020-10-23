import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col, 
    Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


export default class UserShow extends Component {
    render() {
      const {user, deleteUser} = this.props
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
                        <NavLink
                            to={"/userindex"}
                        >
                            <Button color="secondary" onClick={this.props.deleteUser(user.id)}>
                            Delete Profile
                            </Button>
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

UserShow.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      address: PropTypes.string,
      email: PropTypes.string  
    }).isRequired
}