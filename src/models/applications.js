module.exports = (sequelize, Sequelize) => {
  const applications = sequelize.define("aplicaciones", {
    id_empresa: { type: Sequelize.INTEGER },
    nombre_empresa: { type: Sequelize.STRING },
    titulo_oferta: { type: Sequelize.STRING },
    cargo_solicitado: { type: Sequelize.STRING },
    expiracion: { type: Sequelize.DATE },
    fecha_aplicacion: { type: Sequelize.DATE }
  });

  return applications;
};
