const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Role = db.roles;
const op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
/*export const singUp = async (req, res) => {
    try {
        const {idUsuario,nombres,apellidos,usuario,clave,correo}= req.body;
        User.create({
            idUsuario,nombres,apellidos,usuario,clave:bcrypt.hashSync(clave,10)}).then

    } catch (error) {
        res.status(500).json(error);
    }
};*/

export const singUp = (req, res) => {
  const {
    id_usuario,
    nombres,
    apellidos,
    email,
    contraseña,
    contraseña2,
    nacionalidad,
    telefono,
    estado
  } = req.body;
  // Save User to Database
  User.create({
    id_usuario,
    nombres,
    apellidos,
    email,
    contraseña: bcrypt.hashSync(contraseña, 10),
    contraseña2: bcrypt.hashSync(contraseña2, 10),
    nacionalidad,
    telefono,
    estado
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            descripcion: req.body.roles
            
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
              console.log(roles);
            res.json({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.json({ message: "User was registered successfully con 1 !" });
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};


export const signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.contraseña,
        user.contraseña
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña invalida"
        });
      }

      const token = jwt.sign({ id: user.id_usuario }, config.secret, {
        expiresIn: 86400 // 24 horas
      });

      const authorities = [];

      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].descripcion.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
