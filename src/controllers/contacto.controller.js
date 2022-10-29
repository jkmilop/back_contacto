import { Contacto } from "../models/contacto.js";

export async function agregarContacto(req, res) {
  const {  nombres, apellidos, correo, telefono, celular, direccion } = req.body;
  try {
    const nuevoContacto = await Contacto.create({
      nombres, apellidos, correo, telefono, celular, direccion
    });
    res.json(nuevoContacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function verContactos(req, res) {
  try {
    const contact = await Contacto.findAll({
      attributes: ["nombres", "apellidos", "correo", "telefono", "celular", "direccion"],
      order: [["nombres", "DESC"]],
    });
    res.json(contact);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function actualizarContacto(req, res) {
  const { id } = req.params;
  try {

    const contacto = await Contacto.findOne({
      attributes: ["nombres", "apellidos", "correo", "telefono", "celular", "direccion"],
      where: { id },
    });

    contacto.set(req.body);

    await contacto.save();

    res.json(contacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export async function eliminarContacto(req, res) {
  const { id } = req.params;
  try {
    await Contacto.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function seleccionarContacto(req, res) {
  const { id } = req.params;
  try {
    const contacto = await Contacto.findOne({
      where: { id },
      attributes: ["nombres", "apellidos", "correo", "telefono", "celular", "direccion"],
    });
    res.json(contacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
