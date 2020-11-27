module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Francisco100",
  DB: "empleos",
  dialect: "mysql",
  pool: {
      max:5,
      min:0,
      acquire:30000,
      idle:10000

  }
};
