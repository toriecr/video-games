import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import './Game.css'


const Game = (props) => {
  const [game, setGame] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  
  
  useEffect(()=> {
    const slug = props.match.params.slug
    const url = `/api/v1/games/${slug}`
    axios.get(url)
    .then( resp => {
      setGame(resp.data) 
      setLoaded(true)
    })
    .catch( resp=> console.log(resp) )
  }, [])
  
  const handleChange = (e) => {
    e.preventDefault()
    setReview({...review, [e.target.name]: e.target.value})
    console.log('review:', review);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    
    const game_id = parseInt(game.data.id)
    
    axios.post('/api/v1/reviews', {review, game_id})
    .then( resp => {
      // Push review into array of existing reviews for this game
      const included = [...game.included, resp.data.data]
      setGame({...game, included}) // Update value in state
      // After setting review, clear values in review state
      setReview({title: '', description: '', score: 0})
    })
    .catch ( resp => {})
  }
  
  const setRating = (score, e) => {
    e.preventDefault()
    setReview({...review, score})
  }
  
  let reviews
  if (loaded && game.included){
    reviews = game.included.map( (item, index) => {
      return (
        <Review
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }
  
  return (
    <div className="container">
      { 
        loaded &&
        <Fragment>
          <div className="column">
            <div className="main">
              <Header 
                attributes={game.data.attributes}
                reviews={game.included}
              />
              {reviews}
            </div>
          </div>
          <div className="column-review">
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={game.data.attributes}
              review={review}
            />
          </div>
        </Fragment>
      }
    </div>
  )
}

export default Game