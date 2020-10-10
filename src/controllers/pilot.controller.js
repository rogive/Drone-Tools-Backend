const Pilot = require('../models/pilot.model');
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async list(req, res) {
    try {
      const pilots = await Pilot.findAll()
      res.status(200).json(pilots);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async create(req, res) {
    try {
      const data = req.body;      
      const pilots = await Pilot.create(data);
      res.status(200).json(pilots);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async signup(req, res) {
    try {
      const data = req.body;
      const encryptedPassword = await bcrypt.hash(data.password, 8);
      const pilot = await Pilot.create({
        ...data,
        password: encryptedPassword,
      });
      res.status(200).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const pilot = await Pilot.findOne({ email });
      if (!pilot) {
        throw Error("El usuario no existe");
      }

      const isValid = await bcrypt.compare(password, pilot.password);

      if (!isValid) {
        throw Error("Usuario o contraseña invalido!");
      }

      const token = jwt.sign({ id: pilot._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });

      res.status(200).json({ token, pilot });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  },

  async find(req, res) {
    try {
      const { id } = req.params;
      const pilot = await Pilot.findByPk(id);

      if (!pilot) {
        throw Error("El usuario no existe");
      }

      res.status(200).json({ pilot });
    } catch (err) {
      res
        .status(401)
        .json({ message: `Error al encontrar el usuario con id ${id}` });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const data = req.body
      const [updated] = await Pilot.update(data, { where: { id } })
      if (updated) {
        res.status(200).json(data);
      }
      res.status(200).json({
        message: `El usuario con id: ${id} no fue actualizado`
      })
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const pilot = await Pilot.findByPk(id);
      await pilot.destroy();
      res.status(200).json(pilot);
    } catch (err) {
      res.status(400).json({ message: `No se encontro el usuario con id: ${id}` });
    }
  }


}