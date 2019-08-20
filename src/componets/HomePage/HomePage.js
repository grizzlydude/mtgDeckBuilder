import React, { Component } from 'react'
import axios from 'axios'
import './HomePage.css'

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            cardDisplay: [],
            cardIndex: 0
        }
    }

    componentDidMount() {
        axios.get('/api/cards').then(response => {
            console.log('response: ', response.data)
            this.setState({
                cardDisplay: response.data
            })
            console.log('cardDisplay: ', this.state.cardDisplay)
        })
    }

    render() {
        let cards = this.state.cardDisplay.map(el => {
            return el.name
        })
        return (
            <div>
                <h1>Home Page</h1>
                    <div className='cardDisplay'>
                        {/* displays all cards */}
                        {/* {this.state.cardDisplay.name} */}
                        {cards}
                        {/* creates a loading circle while waiting for response.  */}
                        <div class="loader"></div>
                        {/* {this.state.cardDisplay} */}
                    </div>
            </div>
        )
    }
}