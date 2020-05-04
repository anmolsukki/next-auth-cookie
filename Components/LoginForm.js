import React, { Component } from 'react';
import Router from "next/router"
import { loginUser } from "../lib/auth";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        isLoading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showError = (err) => {
        console.error(err)
        const error = err.response && err.response.data || err.message;
        this.setState({ error, isLoading: false })
    }

    handleSubmit = (event) => {
        const { email, password } = this.state;
        event.preventDefault();
        this.setState({ error: "", isLoading: true })
        loginUser( email, password ).then(() => {
            Router.push("/profile")
        }).catch(this.showError);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                </div>
                <button type="submit" disabled={this.state.isLoading}>{this.state.isLoading ? "Loading" : "Submit"}</button>
                {this.state.error && <div>{this.state.error}</div>}
            </form>
        )
    }
}
export default LoginForm;
