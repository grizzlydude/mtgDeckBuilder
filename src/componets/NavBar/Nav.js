import React, { Component } from 'react'
import './Nav.css'
import { Menu } from 'grommet-icons'
import { Link } from 'react-router-dom'
 
class Nav extends Component {
    render() {
        return (
            <nav>
                <div className='navbar'>
                    <li>Home</li>
                    <div className='search'>
                        <input placeholder='Search' />
                        <button className='searchButton'>Search</button>
                    </div>
                    <li>Deck List</li>
                    <li>Contact</li>
                    <div className='loginAndRegister'>
                        <li>Login</li>
                        <li>Register</li>
                    </div>
                    <Menu className='menuIcon' color='red' size='xlarge' />
                </div>
            </nav>
        )
    }
}

export default Nav