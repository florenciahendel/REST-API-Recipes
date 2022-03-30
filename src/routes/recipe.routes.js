import { Router } from "express";

import * as recetaCrtl from "../controllers/receta.controller";
const router = Router();

//getAll recetas
router.get("/", recetaCrtl.findAllRecetas);

//Crear Receta
router.post("/", recetaCrtl.createReceta);

//Buscar una Receta
router.get("/:id", recetaCrtl.findOneReceta);

//Actualizar Receta
router.put('/:id', recetaCrtl.updateReceta)

//Eliminar Receta
router.delete("/:id", recetaCrtl.deleteReceta);

export default router;
