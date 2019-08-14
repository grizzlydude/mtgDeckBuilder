import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { setUser } from '../redux/reducer'
import { connect } from 'react-redux'
import './Register.css'

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }
    register = () => {
        console.log(this.state)
        const { username, email, password } = this.state
        console.log('username: ', username)
        console.log('')
        console.log('email: ', email)
        console.log('')
        console.log('password: ', password)
        console.log('')
        axios.post('/auth/register', { username, email, password })
            .then(res => {
                console.log('username: ', username)
                console.log('')
                this.props.setUser({ username, email, password })
                console.log('username: ', username)
                console.log('')
                this.props.history.push('/')
            }).catch(err => {
                alert('Username, Email, or Password in use')
            })
    }

    cancel = () => {
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <body className='registerBody'>
                <div className='login'>
                    <div className='image'>
                        <img src='https://media.wizards.com/2018/images/daily/gcYrmy5q9f.png' alt='Magic the gathering logo' />
                    </div>
                    <span>Username: <input onChange={(e) => this.handleChange(e, 'username')} type='text' /></span>
                    <span>Email: <input onChange={(e) => this.handleChange(e, 'email')} type='text' /></span>
                    <span>Password: <input onChange={(e) => this.handleChange(e, 'password')} type='password' /></span>
                    <div className='buttons'>
                        <button onClick={this.register}>Register</button>
                        <Link to='/'>
                            <button onClick={this.cancel}>Cancel</button>
                        </Link>
                    </div>
                </div>
            </body>
        )
    }
}
export default connect(null, { setUser })(Register)