const db = require("../models");
const ROLES = db.ROLES;
const User = db.users;

validateUserExists = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    res.status(400).send({
      message: "Ese correo ya existe en la db !"
    });
    return;
  });
  next();
};

checkRolesExistes = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Rol proporcionado es invalido " + req.body.roles[i]
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp={
    validateUserExists:validateUserExists,
    checkRolesExistes:checkRolesExistes
}
module.exports=verifySignUp;

