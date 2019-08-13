import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    state = {
        usernameOrEmail: '',
        password: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    logIn = () => {

    }


    render() {
        return (
            <div>
                <span>Username Or Email: <input onChange={(e, key) => this.handleChange(e, 'password')} type='text' /></span>
                <span>Password: <input onChange={(e, key) => this.handleChange(e, 'password')} type='password' /></span>
                <button onClick={this.logIn}>Log In</button>
                <button>Cancel</button>
            </div>
        )
    }
}