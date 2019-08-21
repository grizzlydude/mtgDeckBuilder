import React, { Component } from 'react'
import './Nav.css'
import { Menu } from 'grommet-icons'
import { Link } from 'react-router-dom'

class Nav extends Component {
    state = {
        toggle: false
    }

    handleToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <nav>
                <div className=''>
                    <Menu className='menuIcon'
                        color='red'
                        size='xlarge'
                        onClick={() => this.handleToggle()} />
                </div>
                <div className='navbar' style={{ display: this.state.toggle ? null : 'none' }}>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <div className='search'>
                        <input placeholder='Search' />
                        <button className='searchButton'>Search</button>
                    </div>
                    <Link to='/api/decklist'>
                        <li>Deck List</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <div className='loginAndRegister'>
                        <Link to='/auth/login'>
                            <li>Login</li>
                        </Link>
                        <Link to='/auth/register'>
                            <li>Register</li>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav