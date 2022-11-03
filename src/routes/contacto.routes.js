import { Router } from "express";
import {
  verContactos,
  agregarContacto,
  actualizarContacto,
  seleccionarContacto,
  eliminarContacto,
} from "../controllers/contacto.controller.js";

const router = Router();
router.post("/", agregarContacto);
router.get("/", verContactos);
router.put("/:id", actualizarContacto);
router.delete("/:id", eliminarContacto);
router.get("/:id", seleccionarContacto);

export default router;
