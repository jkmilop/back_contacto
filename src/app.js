import express from "express";
import cors from "cors";
import routes from "./routes/contacto.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/contactos", routes);

export default app;
