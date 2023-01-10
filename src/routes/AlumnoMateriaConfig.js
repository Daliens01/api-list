const express = require("express");
const router = express.Router();
const schema = require("../models/AlumnoMateria");
 
//agregar
router.post(("/AlumnoMateriaConfig"), async(req, res)=>{
    const saved = schema(req.body);
    await saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}));
})
//ver
router.get(("/AlumnoMateriaConfig"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

//ver por id
router.get(("/AlumnoMateriaConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//actualizar
router.put(("/AlumnoMateriaConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    const {idAlumno, idMateria,bloque,fechaInicio,fechaFin} = req.body;
    await schema.updateOne({_id: id},{ $set: {idAlumno, idMateria,bloque,fechaInicio,fechaFin}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//eliminar
router.delete(("/AlumnoMateriaConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router