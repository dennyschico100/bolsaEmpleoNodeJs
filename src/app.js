import expres from "express";
import morgan from "morgan";
import pkg from "../package.json";
import offersRoutes from "./routes/offers.route";
const app = new expres();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(expres.json());
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
