import React from 'react'
import './Home.css'
import FoodCard from '../../components/FoodCard/FoodCard.js'
import { PRODUCTS, MAIN_TITLE, TAG_LINE, THEME } from '../../config/data.js'




function Home() {
  return (
    <>
    <div>
        <h1 className='heading' style={{color : THEME.light, backgroundColor: THEME.tertiary}}>{MAIN_TITLE}</h1>
        <p className='sub-heading'>{TAG_LINE}</p>
    </div>
    <div className='food-cards-container'>
      {PRODUCTS.map((foodItem)=>{
         return  <FoodCard
         imgUrl={foodItem.imgUrl}
         title={foodItem.title}
         description={foodItem.description}
         isVeg={foodItem.isVeg}
         price={foodItem.price}
        />
      })}
       

    </div>
    </>
  )
}

export default Home