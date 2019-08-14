import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { setUser } from '../redux/reducer'
import { connect } from 'react-redux'
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    logIn = () => {
        console.log(this.state)
        console.log('')
        const { username, password } = this.state
        console.log('username: ', username)
        console.log('')
        axios.post('/auth/login', { username, password })
            .then(res => {
                this.props.setUser({ username, password })
                this.props.history.push('/')
            }).catch(err => {
                alert('Username/Email and/or Password does not match. Try another Username/email or password')
            })
    }

    cancel = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <body>
                <div className='login'>
                    <div className='image'>
                        <img src='https://media.wizards.com/2018/images/daily/gcYrmy5q9f.png' />
                    </div>
                    <span>Username Or Email: <input onChange={(e) => this.handleChange(e, 'username')} type='text' /></span>
                    <span>Password: <input onChange={(e) => this.handleChange(e, 'password')} type='password' /></span>
                    <div className='buttons'>
                        <button onClick={this.logIn}>Log In</button>
                        <Link to='/'>
                            <button onClick={this.cancel}>Cancel</button>
                        </Link>
                    </div>
                </div>
            </body>
        )
    }
}
export default connect(null, { setUser })(Login)