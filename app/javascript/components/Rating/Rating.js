import React from 'react'
import './Rating.css'
// import FontAwesomeIcon from "@fontawesome/react-fontawesome"
// import * as Icons from "@fontawesome/fontawesome-free-solid"

const Rating = (props) => {
  const score = (props.score/5) * 100
  
  return (
    <span className="star-wrapper">
      <span className="stars" style={{width: score + "%"}}></span>
    </span>
  )
}

export default Rating