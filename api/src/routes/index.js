const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const axios = require("axios").default;

require("dotenv").config();
const { API_URL, API_KEY } = process.env;

const { Videogame, Genres } = require("../db"); // Lo importamos desde la DB porque los models estan relacionadas.

getGenres = async () => {
  try {
    let apiInfo = await axios.get(`${API_URL}/api/genres?key=${API_KEY}`);
    let allGenres = apiInfo.data.results.map((genre) => genre.name);

    allGenres.forEach((genre) => {
      Genres.findOrCreate({
        where: { name: genre },
      });
    });

    return allGenres;
  } catch (error) {
    console.log(error);
  }
};

getDetailVideogame = async (id) => {

  try {
    
    let apiInfo = await axios.get(
      `${API_URL}/api/games/${id}?key=${API_KEY}`
    );
    let data = [apiInfo.data]

    detail = data.map(elem => {
      return({
        id: elem.id,
        name: elem.name,
        background_image: elem.background_image,
        description: elem.description,
        released: elem.released,
        rating: elem.rating,
        platforms: elem.platforms.map(genre => genre.platform.name),
        genres: elem.genres.map(genre => genre.name)
      })
    })
    return detail 
  
  } catch (error) {
    console.log(error);
  }
}

getApiInfo = async () => {

  try {
    
      var videogames100 = []

      for (let i = 1; i <= 5; i++) {

      let apiInfo = await axios.get(
        `${API_URL}/api/games?key=${API_KEY}&page=${i}`
      );

      apiInfo.data.results.forEach((game) => {
        videogames100.push({
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          released: game.released,
          rating: game.rating,
          platforms: game.platforms.map(genre => genre.platform.name),
          genres: game.genres.map(genre => genre.name)
        })
      });
    }
    return videogames100;
      
  } catch (error) {
    console.log(error);
  }

};

getDbInfo = async () => {
  let dbInfo = await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dbInfo;
};

getDbAndApi = async () => {
  let apiInfo = await getApiInfo();
  let dbInfo = await getDbInfo();

  return apiInfo.concat(dbInfo);
};


router.get("/genres", async (req, res) => {
    
  let allGenres = await getGenres();

  try {
    res.send(allGenres);
  } catch (error) {
    console.log(error);
  }
});

router.post('/videogames', async(req, res) => {
  const { name, background_image, description, released, rating, platforms, genres } = req.body

  try {
    
    let findGenres = await Genres.findAll({ where: { name: genres } })

    if(findGenres.length) {

      let createVideogame = await Videogame.create({ name, background_image, description, released, rating, platforms })

      let id_Videogame_Genres = await createVideogame.addGenres(findGenres)
      res.send(id_Videogame_Genres)

    } else {
      res.send('NOT CREATED')
    }
    
  } catch (error) {
    console.log(error);
  }
})

router.get ('/videogame/:id', async(req, res) => {
  const { id } = req.params

  try {
    let detail_db_Videogame = await getDbInfo()
    let findDetail = detail_db_Videogame.filter(detail => detail.id == id)

    if(findDetail.length) {
      res.send(findDetail)

    } else { 
      let detail_Api_Videogame = await getDetailVideogame(id)

      !detail_Api_Videogame ?
      res.send(detail_Api_Videogame) :
      res.send(detail_Api_Videogame) 
    }

  } catch (error) {
    console.log(error);
  }
})

router.get("/videogames", async (req, res) => {
  const { name } = req.query

  let dbAndApi = await getDbAndApi()

  try {

    if(name) {
      let findName = dbAndApi.filter(game => game.name.toUpperCase().includes(name.toUpperCase()))

      !findName.length ? res.send({ ERROR: `The name ➡ ${name} NOT EXIST`}) : res.send(findName)
    } else {
      res.send(dbAndApi);
    }
    
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
