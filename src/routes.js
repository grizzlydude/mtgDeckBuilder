import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './componets/Login/Login'
import Register from './componets/Register/Register'
import HomePage from './componets/HomePage/HomePage'
import DeckList from './componets/DeckList/DeckList'
import DeckMake from './componets/DeckMaker/DeckMake'
import SingleDeck from './componets/SingleDeck/SingleDeck'

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/auth/login' component={Login}/>
        <Route path='/auth/register' component={Register}/>
        <Route path='/api/decklist' component={DeckList}/>
        <Route path='/api/singledeck' component={SingleDeck}/>
        <Route path='/api/makedeck' component={DeckMake}/>
    </Switch>
)