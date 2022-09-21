const express = require("express");
const router = express.Router();
const schema = require("../models/Asignacion");
 
//agregar
router.post(("/AsignacionConfig"), async(req, res)=>{
    const saved = schema(req.body);
    await saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}));
})
//ver
router.get(("/AsignacionConfig"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//ver por id
router.get(("/AsignacionConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//actualizar
router.put(("/AsignacionConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    const {idAlumno, bloque, plan, codigoMateria, fechaInicio, fechaFin, idMateria} = req.body;
    await schema.updateOne({_id: id},{ $set: {idAlumno, bloque, plan, codigoMateria, fechaInicio, fechaFin, idMateria}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//eliminar
router.delete(("/AsignacionConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router