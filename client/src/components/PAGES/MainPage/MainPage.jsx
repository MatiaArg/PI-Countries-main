import React from "react";
import s from './MainPage.module.css'
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className= { s.div }>
      <Link to='/home'>
        <button className= { s.btn }>
          ➡ HAZ CLICK AQUI ⬅
        </button>
      </Link>
    </div>
  )
}
