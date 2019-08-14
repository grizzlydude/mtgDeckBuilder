import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    state = {
        usernameEmailInput: '',
        passwordInput: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    logIn = () => {
        console.log(this.state)
        console.log('')
        const { username, email, password } = this.state
        console.log('username: ', username)
        console.log('')
        axios.post('/auth/login', { username, email, password })
            .then(res => {
                console.log('logging In')
            }).catch(err => {
                alert('Username/Email and/or Password does not match. Try another Username/email or password')
            })
    }
    // login = () => {
    //     console.log(this.state)
    //     const { username, password } = this.state
    //     console.log(username)
    //     // currently only sending the catch err. 
    //     axios.post('/api/auth/login', { username, password })
    //         .then(res => {
    //             this.props.setUser({ username, password })
    //             this.props.history.push('/dashboard')
    //         }).catch(err => {
    //             alert('Username and/or Password does not exist. Try again')
    //         })
    //     console.log(username)
    // }


    cancel = () => {
        
    }

    render() {
        return (
            <div>
                <span>Username Or Email: <input onChange={(e) => this.handleChange(e, 'password')} type='text' /></span>
                <span>Password: <input onChange={(e) => this.handleChange(e, 'password')} type='password' /></span>
                <button onClick={this.logIn}>Log In</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}