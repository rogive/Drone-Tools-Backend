const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require ("../database/connection");

const Project = sequelize.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        args: true,
        msg: 'Debe ingresar un valor válido para el campo nombre'
      },
      notNull: {
        msg: 'Porfavor, ingrese un valor válido para el campo nombre'
      }
    }
  },
  flighttime: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isNumeric: {
        args: true,
        msg: "Las horas de vuelo deben ser un valor númerico"
      },
      len: {
        args: [1,4],
        msg: "Las horas de vuelo deben ser entre 1 y 10000"
      },
      max: {
        args: 10000,
        msg: "Las horas de vuelo deben ser menor o igual a 10000"
      },
      min: {
        args: 1,
        msg: "Las horas de vuelo deben ser mayor o igual a 1"
      }
    }
  },
  takeoff: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isNumeric: {
        args: true,
        msg: "Los despegues deben ser un valor númerico"
      },
      len: {
        args: [1,4],
        msg: "Las horas de vuelo deben ser entre 1 y 10000"
      },
      max: {
        args: 10000,
        msg: "Las horas de vuelo deben ser menor o igual a 10000"
      },
      min: {
        args: 1,
        msg: "Las horas de vuelo deben ser mayor o igual a 1"
      }
    }
  }
});

module.exports = Project