import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Games from './Games/Games'
import Game from './Game/Game'

const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={Games}/>
    <Route exact path="/games/:slug" component={Game}/>
  </Switch>)
}

export default App