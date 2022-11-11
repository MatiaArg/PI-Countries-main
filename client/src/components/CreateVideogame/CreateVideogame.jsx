import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import img from '../../assets/arrow-black.png'
import s from "./CreateVideogame.module.css";

export const CreateVideogame = (props) => {
  console.log(props);
// name, background_image, description, released, rating, platforms, genres

  let dispatch = useDispatch();
  let allGenres = useSelector((state) => state.genres);

  let [error, setError] = useState({});

  let [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  let validate = (input) => {
    let error = {};
    if (!input.name) error.name = "Name is required";

    if (!input.description) error.description = "Description is required";

    if (!input.released) error.released = "Released is required";
    // if (input.released > 100) error.released = "Limit 100 character";

    if (!input.rating) error.rating = "Rating is required";

    if (!input.image) error.image = "Image is required";
    if (!input.image.includes(".jpg"))
      if (!input.image.includes(".png"))
        error.image = "The image has to be .jpg or .png";

    // if (!input.genres) error.genres = 'You have to check some answer'

    return error;
  };

  let handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    let objError = validate({ ...input, [e.target.name]: e.target.value });
    setError(objError);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    setInput({
      name: "",
      image: "",
      description: "",
      released: "",
      rating: "",
      platforms: [],
      genres: [],
    });

    dispatch(postVideogames(input))
    alert("CONGRATULATIONS❗❗, you have created a new Videogame");
  };

  let handleCheckbox = (e) => {
    console.log(e);
    if (e.target.checked) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    } else {
      let deleteGenre = input.genres.filter((elem) => elem !== e.target.value);

      setInput({
        ...input,
        genres: deleteGenre,
      });
    }
  };


  return (
    <div>

      <div className={s.div_link}>
        <Link className={s.link} to='/home'>
          <img src={img} alt="img-back-home" />
          <h2>Back to home</h2>
        </Link>
      </div>

      <form className={s.form} onSubmit={handleSubmit}>
        <h2>Create your Videogame!!</h2>

        <label>Name: </label>
        <input
          className={error.name && s.danger}
          type="text"
          name="name"
          value={input.name}
          placeholder="videogame name..."
          onChange={handleChange}
        />
        {/* {!input.name && <p>Fill in the field</p>} */}
        {error.name && <p>{error.name}</p>}
        <br />

        <label>Description: </label>
        <input
          className={error.description && s.danger}
          type="text"
          name="description"
          value={input.description}
          placeholder="videogame description..."
          onChange={handleChange}
        />
        {/* {!input.description && <p>Fill in the field</p>} */}
        {error.description && <p>{error.description}</p>}
        <br />

        <label>Released: </label>
        <input
          className={error.released && s.danger}
          type="date"
          name="released"
          value={input.released}
          placeholder="videogame released..."
          onChange={handleChange}
        />
        {/* {!input.released && <p>Fill in the field</p>} */}
        {error.released && <p>{error.released}</p>}
        <br />

        <label>Rating: </label>
        <input
          className={error.rating && s.danger}
          type="number"
          name="rating"
          value={input.rating}
          placeholder="videogame rating..."
          onChange={handleChange}
        />
        {/* {!input.rating && <p>Fill in the field</p>} */}
        {error.rating && <p>{error.rating}</p>}
        <br />

        <label>Image: </label>
        <input
          className={error.image && s.danger}
          type="text"
          name="image"
          value={input.image}
          placeholder="videogame image..."
          onChange={handleChange}
        />
        {/* {!input.image && <p>Fill in the field</p>} */}
        {error.image && <p>{error.image}</p>}
        <br />

        <h3>Select all Genres Types your need for your Videogame: </h3>
        <div className={s.genreContain}>
          {allGenres &&
            allGenres.map((genre, index) => {
              return (
                <div className={s.genreOption} key={index}>
                  <span>{genre}</span>
                  <input
                    type="checkbox"
                    value={genre}
                    name="genres"
                    onChange={handleCheckbox}
                  />
                </div>
              );
            })}
            {/* {error.genres && <p>{error.genres}</p>} */}
        </div>
        <br />

        <h3>Select all Platforms Types your need for your Videogame: </h3>
        <div className={s.genreContain}>
          {allGenres &&
            allGenres.map((genre, index) => {
              return (
                <div className={s.genreOption} key={index}>
                  <span>{genre}</span>
                  <input
                    type="checkbox"
                    value={genre}
                    name="genres"
                    onChange={handleCheckbox}
                  />
                </div>
              );
            })}
            {/* {error.genres && <p>{error.genres}</p>} */}
        </div>
        <br />

        {!input.name ||
        !input.description ||
        !input.released ||
        !input.rating ||
        !input.image ||
        !input.genres.length ||
        error.name ||
        error.description ||
        error.released ||
        error.rating ||
        error.image ? (
          <button type="submit" disabled className={s.btn_disabled}>
            Create Videogame
          </button>
        ) : (
          <button type="submit">Create Videogame</button>
        )}
      </form>
    </div>
  );
};
