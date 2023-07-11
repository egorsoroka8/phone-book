const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Phones = sequelize.define('phones', {
    id : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number : { type: DataTypes.STRING, unique: true }
});

module.exports = { Phones };