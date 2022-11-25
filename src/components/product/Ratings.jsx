import React, { Fragment } from 'react'
import { RiStarFill } from 'react-icons/ri'


const Ratings = ({ ratingValue }) => {

    const rating = [];

    for (let i = 0; i < 5 ; i++) {
        rating.push( <RiStarFill key={i} /> );
    }

    if (ratingValue > 0) {
        
        for (let y = 0; y < ratingValue; y++) {
            rating[y] = <RiStarFill className='yellow' key={y} />
        }
    }

  return (
    <Fragment>{rating}</Fragment>
  )
}

export default Ratings