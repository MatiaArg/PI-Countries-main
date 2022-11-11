import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../../redux/actions";
import { Cards } from "../../Cards/Cards";
import { NavBar } from "../../NavBar/NavBar";
import { Pagination } from "../../Pagination/Pagination";
import s from './Home.module.css'

export const Home = () => {

  let dispatch = useDispatch()  
  let allVideogames = useSelector(state => state.allVideogames)

  useEffect(()=> {
    dispatch(getVideogames())
  },[])
  

  return (
    <div>
      <NavBar/>
      <h1>Search Videogame</h1>

      <label>Game: </label>
      <input type="text" placeholder="Search by name" />

      <button type="submit">Search</button>
      
      <div className={s.lds_circle}><div></div></div>
      <Cards allVideogames={allVideogames}/>
      <Pagination/>
    </div>
  );
};
