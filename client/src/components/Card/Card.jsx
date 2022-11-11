import React from 'react'
import s from './Card.module.css'

// name, background_image, description, released, rating, platforms, genres
export const Card = ({name, image, rating, genres}) => {
  return (
    <div className={s.div_card}>
      <p>{rating}</p>
      <h3>{name}</h3>
      <img src={image} alt={`${name}`}/>
      {/* <h2>
        {genres.length && genres.map( g => {
          g
        })}
      </h2> */}
      {/* {diets.length ? diets.map((d,i) => {
        return (
          <h3 key={i}>
            {Object.values(d)}
          </h3>
        )
      }) :
      <span>no diets</span>
    } */}
      {/* <h3>{dishTypes}</h3> */}
    </div>
  )
}
