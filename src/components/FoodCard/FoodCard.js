import React from 'react'
import './FoodCard.css'
import veg from './../../assets/veg-icon.png'
import nonveg from './../../assets/non-veg.jpg'
import { THEME, BUTTON_TEXT } from '../../config/data'


function FoodCard({ imgUrl, title, description, isVeg, price }) {
  return (
    <div className='food-card'>
      <div className='food-card-img-wrapper'>
        <img
          src={imgUrl}
          className='food-card-img'
          alt='food'
        />
        <img
          src={isVeg ? veg : nonveg}
          className='food-card-icon'
          alt='icon'
        />
      </div>

      <h1 className='food-card-title' style={{color: THEME.tertiary}}>{title}</h1>
      <p className='food-card-description'>{description}</p>

      <p className='food-card-price'>
        ₹ {price}
      </p>

      <button className='food-card-btn'>
        {BUTTON_TEXT}
      </button>
    </div>
  )
}

export default FoodCard
