const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.offers = require("../models/offers.model")(sequelize, Sequelize);
db.users = require("../models/users.model")(sequelize, Sequelize);
db.roles = require("./roles.model")(sequelize, Sequelize);
db.applications=require("../models/applications")(sequelize,Sequelize);

db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.users.belongsToMany(db.applications,{
  through:"user_application",
  foreignKey:"userId",
  otherKey:"applicationId"
});


db.applications.belongsToMany(db.users,{
  through:"user_application",
  foreignKey:"applicationId",
  otherKey:"userId"
  
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
