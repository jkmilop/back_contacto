import express from "express";
import morgan from "morgan";

const app = express();

import routes from "./routes/contacto.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/contactos", routes);

export default app;
