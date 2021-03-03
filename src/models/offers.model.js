module.exports = (sequelize, Sequelize) => {
  const Offers = sequelize.define("oferta_empleos", {
    id_empresa: { type: Sequelize.INTEGER },
    nombre_empresa: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 40],
        is: /^[a-zA-Z0-9 ]*$/
      }
    },
    titulo_oferta: { type: Sequelize.STRING },
    cargo_solicitado: { type: Sequelize.STRING },
    puestos_vacantes: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true,
        notEmpty: true
      }
    },
    tipo_de_contratacion: { type: Sequelize.STRING },
    validate: {
      notEmpty: true,
      is: /^[a-zA-Z ]*$/
    },
    nivel_de_experiencia: {
      type: Sequelize.STRING,
      validate: {
        is: /^[a-zA-Z0-9 ]*$/
      }
    },
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
