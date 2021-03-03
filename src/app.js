import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import offersRoutes from "./routes/offers.route";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/users.route";
import applicationRoutes from "./routes/applications.route";
const bodyParser = require("body-parser");
const app = new express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(bodyParser.json());

const db = require("../src/models/index");
const Role = db.roles;
name: "moderator";

db.sequelize.sync({ force: !false }).then(() => {
  console.log("Drop and re-sync db.");
  definirRoles();
});

function definirRoles() {
  Role.create({
    id: 1,
    descripcion: "user"
  });

  Role.create({
    id: 2,
    descripcion: "moderator"
  });

  Role.create({
    id: 3,
    descripcion: "admin"
  });
}

app.get("/", (req, res) => {
  res.json(
    res.json({
      author: app.get("pkg").author,
      description: app.get("pkg").description,
      versoin: app.get("pkg").version
    })
  );
});


app.use("/api/offers", offersRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/",userRoutes);
app.use("/api/applications/",applicationRoutes );
export default app;

//Mapas estrategicos
/*Financiera y Internos procesos Negocios */
