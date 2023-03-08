const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('todos', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,

  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  categories_id:{
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  

}, {
  timestamps: true,
  updatedAt: false,
  createdAt: "create_at"
});

module.exports = Todos;