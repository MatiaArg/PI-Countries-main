const { DataTypes, Model } = require("sequelize");

class Genres extends Model {}

module.exports = (sequelize) => {
  Genres.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "genres",
    }
  );
};
