import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";
import imageBlack from "../../assets/arrow-black.png";
import imageRed from "../../assets/arrow-red.png";

export const NavBar = () => {
  return (
    <div className={s.div}>
      <Link className={s.link1} to="/">
        <img className={s.img1} src={imageBlack} alt="img-back" />
        <h2 className={s.h2_black}>Back</h2>
      </Link>

      <Link className={s.link1} to="/createVideogame">
        <h2 className={s.h2_red}>Create Game</h2>
        <img className={s.img2} src={imageRed} alt="img-create" />
      </Link>
    </div>
  );
};
