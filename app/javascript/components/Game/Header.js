import React from 'react'
import './Header.css'

const Header = (props) => {
  const {name, image_url, avg_score} = props.attributes
  const totalReviews = props.reviews.length
  
  return (
    <div className="wrapper">
      <h1><img src={image_url} alt={name} />{name}</h1>
      <div>
        <div className="totalReviews">User Reviews: {totalReviews}</div>
        <div className="starRating"></div>
        <div className="totalOutOf">Average rating: {avg_score} out of 5</div>
      </div>
    </div>
  )
}

export default Header