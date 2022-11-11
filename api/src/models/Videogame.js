const { DataTypes, Model } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize(que viene de la db.js).

class Videogame extends Model {}

module.exports = (sequelize) => {
  // defino el modelo
  Videogame.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      background_image: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      released: {
        type: DataTypes.STRING,
      },

      rating: {
        type: DataTypes.FLOAT,
      },

      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: "videogame",
    }
  );
};
