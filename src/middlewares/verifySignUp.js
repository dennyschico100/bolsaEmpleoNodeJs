const db = require("../models");
const ROLES = db.ROLES;
const User = db.users;
const validateAlreadyUserExists = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Ese correo ya existe en la base de datos !"
      });
      return;
    }

    next();
  });
};

const checkRolesExists = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).json({
          message: "Rol proporcionado es invalido " + req.body.roles[i]
        });
        return;
      }
    }
  }
  next();
};

export { validateAlreadyUserExists, checkRolesExists };
