import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import offersRoutes from "./routes/offers.route";

const bodyParser = require("body-parser");
const app = new express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(bodyParser.json());

const db = require("../src/models/index");
db.sequelize.sync();
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });*/

app.get("/", (req, res) => {
  res.json(
    res.json({
      author: app.get("pkg").author,
      description: app.get("pkg").description,
      versoin: app.get("pkg").version
    })
  );
});
app.use("/offers", offersRoutes);
export default app;

//Mapas estrategicos
/*Financiera y Internos procesos Negocios */
