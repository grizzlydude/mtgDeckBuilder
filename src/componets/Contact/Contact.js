import React, { Component } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            emailAddress: '',
            subject: '',
            content: ''
        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
        console.log(this.state)
        console.log('')
    }

    // Will need to connect to the backend and contruct an email for req.body to send.
    // send() {

    // }

    resetState() {
        console.log(this.state)
        console.log('')
        this.setState({
            emailAddress: '',
            subject: '',
            content: ''
        })
    }

    render() {
        return (
            <div className='contactContainer'>
                <h1>Contact</h1>
                <input placeholder='Email Address'
                    onChange={(e) => this.handleChange(e, 'emailAddress')}
                    value={this.state.emailAddress} />
                <input placeholder='Subject'
                    onChange={(e) => this.handleChange(e, 'subject')}
                    value={this.state.subject} />
                <div className='contentMail'>
                    <input placeholder='Content'
                        onChange={(e) => this.handleChange(e, 'content')}
                        value={this.state.content} />
                </div>
                <div className='mailingButtons'>
                    <button>Send</button>
                    <button onClick={() => this.resetState()}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Contact