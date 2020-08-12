const Sequelize = require('sequelize');
// const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const tableName = 'bookTable';

const BookingInfo = sequelize.define('BookingInfo', {
  userid: {
    type: Sequelize.STRING,
  },
  startLoc: {
    type: Sequelize.STRING,
  },
  endLoc: {
    type: Sequelize.STRING,
  },
}, { tableName });

// eslint-disable-next-line
BookingInfo.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  // delete values.password;

  return values;
};

module.exports = BookingInfo;
