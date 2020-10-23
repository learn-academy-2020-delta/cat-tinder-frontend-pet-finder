import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


export default class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                id: "",
                name: "",
                age: "",
                address: "",
                email: ""
            },
            success: false
        }
    }

    componentDidMount(){
        this.setState({ form: this.props.user})
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.updateUser(this.state.form, this.state.form.id)
        this.setState({ success: true })
    }
    render() {
      const {form, success} = this.state
        return (
            <div id="user-edit-body">
                <h3>Edit Account</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Update your Name</Label>
                        <Input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={form.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Update your Age</Label>
                        <Input
                            type="number"
                            name="age"
                            onChange={this.handleChange}
                            value={form.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Update your address</Label>
                        <Input
                            type="text"
                            name="address"
                            onChange={this.handleChange}
                            value={form.address}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Update your email</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={form.email}
                        />
                    </FormGroup>
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}
                    >
                        Update Account
                    </Button>
                </Form>
                { success && <Redirect to="/userindex" />}
            </div>
        )
    }
}

UserEdit.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      address: PropTypes.string,
      email: PropTypes.string  
    }).isRequired,
    updateUser: PropTypes.func.isRequired
}
