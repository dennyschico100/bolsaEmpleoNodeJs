module.exports = (sequelize, Sequelize) => {
  const Offers = sequelize.define("oferta_empleos", {
    id_empresa: { type: Sequelize.INTEGER },
    nombre_empresa: { type: Sequelize.STRING },
    titulo_oferta: { type: Sequelize.STRING },
    cargo_solicitado: { type: Sequelize.STRING },
    puestos_vacantes: { type: Sequelize.INTEGER },
    tipo_de_contratacion: { type: Sequelize.STRING },
    nivel_de_experiencia: { type: Sequelize.STRING },
    genero: { type: Sequelize.INTEGER },
    edad: { type: Sequelize.STRING },
    salario_minimo: { type: Sequelize.INTEGER },
    salario_maximo: { type: Sequelize.INTEGER },
    vehiculo: { type: Sequelize.STRING },
    pais: { type: Sequelize.STRING },
    departamento: { type: Sequelize.STRING },
    estado: { type: Sequelize.INTEGER },
    expiracion: { type: Sequelize.DATE },
    area_empresa: { type: Sequelize.STRING }

  });
  return Offers;
};
