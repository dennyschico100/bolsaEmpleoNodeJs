module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("usuarios", {
    id_usuario: { type: Sequelize.INTEGER },
    nombres: { type: Sequelize.STRING },
    apellidos: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    contraseña: { type: Sequelize.STRING },
    contraseña2: { type: Sequelize.STRING },
    nacionalidad: { type: Sequelize.STRING },
    telefono: { type: Sequelize.INTEGER },
    estado: { type: Sequelize.INTEGER }
  });

  return Users;
};
