import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Game from './Game'
import './Games.css'

const Games = () => {
  const [games, setGames ] = useState([])
  
  useEffect(() => {
    axios.get('/api/v1/games.json')
    .then( resp => { setGames(resp.data.data)})
    .catch( resp => console.log(resp) )
  }, [games.length])
  
  const grid = games.map( item => {
    return (
      <Game 
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })
  
  return (
    <div>
      <div className="header">
        <span className="subheader">
          <h1>Best games on <i class="fab fa-steam"></i>&nbsp;STEAM</h1>
          <h2>Popular games, rated honestly</h2>
        </span>
      </div>
      <div className="home">
        <div className="grid">
          {grid}
        </div>
      </div>
    </div>
  )
}

export default Games