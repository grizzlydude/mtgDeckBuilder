import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className='navbar'>
                <h3>Home</h3>
                <div className='search'>
                    <span>Search: <input /></span>
                    <button>Search</button>
                </div>
                <h3>Deck List</h3>
                <h3>Contact</h3>
                <div className='loginAndRegister'>
                    <h3>Login</h3>
                    <h3>Register</h3>
                </div>
            </div>
        )
    }
}

export default Nav