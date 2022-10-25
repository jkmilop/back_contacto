'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contacto.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    celular: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contacto',
  });
  return Contacto;
};