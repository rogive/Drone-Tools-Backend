const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require ("../database/connection");
const Project = require('./project.model');

const Pilot = sequelize.define("Pilot", {
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
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        args: true,
        msg: 'Debe ingresar un valor válido para el campo apellido'
      },
      notNull: {
        msg: 'Porfavor, ingrese un valor válido para el campo apellido'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: 'Debe ingresar un valor válido para el campo email'
      },
      notNull: {
        msg: 'Porfavor, ingrese un valor válido para el campo email'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Porfavor, ingrese un valor válido para el campo contraseña'
      }
    }
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
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
}, {timestamps: false});

Pilot.hasMany(sequelize.models.Project);
Project.belongsTo(sequelize.models.Pilot);

module.exports = Pilot