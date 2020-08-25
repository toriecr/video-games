import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import './Game.css'

const Game = (props) => {
  return (
    <div className="card">
      <div className="game-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className="game-name">{props.attributes.name}</div>
      <Rating score={props.attributes.avg_score}/>
      <div className="link-wrapper">
        <Link to={`/games/${props.attributes.slug}`}>View Game</Link>
      </div>
    </div>
  )
}

export default Game