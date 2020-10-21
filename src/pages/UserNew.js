import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'


export default class UserNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                age: "",
                address: "",
                email: ""
            },
            success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.createNewUser(this.state.form)
        this.setState({ success: true })
    }

    render() {
        return (
            <div id="user-new-body">
            <React.Fragment>
                <h3>New User</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Enter your Name</Label>
                        <Input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.form.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Enter your Age</Label>
                        <Input
                            type="number"
                            name="age"
                            onChange={this.handleChange}
                            value={this.state.form.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Enter your address</Label>
                        <Input
                            type="text"
                            name="address"
                            onChange={this.handleChange}
                            value={this.state.form.address}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Enter your email</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.form.email}
                        />
                    </FormGroup>
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}
                    >
                        Create New User Account
          </Button>
                </Form>
                { this.state.success && <Redirect to="/petindex" />}
            </React.Fragment>
            </div>

        )
    }
}