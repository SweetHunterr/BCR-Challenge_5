'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_size, {
        foreignKey: 'id_size'
      })
    }
  }
  tbl_cars.init({
    name: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    url_image: DataTypes.STRING,
    id_size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_cars',
  });
  return tbl_cars;
};