// import Sequelize from 'sequelize';
const Sequelize = require('sequelize');
import sequelizeConnection from '../config/connection'

class SequelizeBurger extends sequelizeConnection {}

    SequelizeBurger.init({
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false},
  devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    len: [5,40]
  }
}), {sequelize, modelName: 'SequelizeBurger'}

SequelizeBurger.sync({force: true});

export default SequelizeBurger;
