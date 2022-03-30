import Receta from "../models/Receta";
import { getPagination } from "../libs/getPagination";

export const findAllRecetas = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};
    const { offset, limit } = getPagination(page, size);
    const data = await Receta.paginate(condition, { offset, limit });
    
    res.json({
      totalItems: data.totalDocs,
      recetas: data.docs,
      totalPages: data.totalPages,
      curretnPages: data.page -1
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error al devolver las recetas" });
  }
};

export const createReceta = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Este campo no puede estar vacío" });
  }

  try {
    const newReceta = new Receta({
      title: req.body.title,
      description: req.body.description,
      ingredients: req.body.ingredients,
      procedure: req.body.procedure,
      time: req.body.time,
    });
    const recetaGuardada = await newReceta.save();

    res.json(recetaGuardada);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error al guardar la información" });
  }
};

export const findOneReceta = async (req, res) => {
  const { id } = req.params;
  try {
    const receta = await Receta.findById(id);
    if (!receta)
      return res
        .status(404)
        .json({ message: `La receta con el id ${id} no existe` });
    res.json(receta);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error al buscar la receta con id ${id}`,
    });
  }
};

export const updateReceta = async (req, res) => {
  try {
    await Receta.findOneAndUpdate(req.params.id, req.body);
    res.json({ message: "Receta actualizada con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReceta = async (req, res) => {
  const { id } = req.params;
  try {
    await Receta.findOneAndDelete(id);
    res.json({ message: "Receta eliminada con éxito" });
  } catch (error) {
    return res.status(500).json({
      message: error.message || `No se pudo elimianr la receta con id ${id}`,
    });
  }
};
