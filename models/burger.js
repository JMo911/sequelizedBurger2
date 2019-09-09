// var orm = require("../config/orm");
// import sequelizeConnection from '../config/connection'
const sequelizeConnection = require('../config/connection');
const sequelizeBurger = require('../models/sequelizeBurger');

var burger = {
  all: function(cb) {
    // orm.all("burgers", function(res) {
    //   cb(res);
    // });
    sequelizeConnection.sequelizeBurger.findAll({}).then(cb);
  },
  create: function(name, cb) {
    // orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
    // sequelizeConnection
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
