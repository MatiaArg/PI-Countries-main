import React from 'react'
import { Card } from '../Card/Card'
import s from './Cards.module.css'

export const Cards = ({allVideogames}) => {
  return (
    <div className={s.cards_container}>
    {allVideogames && allVideogames.map(game => {
      return (
        <Card
          key = {game.id}
          name = {game.name}
          image = {game.image}
          diets = {game.rating}
          // genres = {game.genres}
        />
      )
    })}
  </div>
  )
}
