const express = require("express");
const router = express.Router();
const schema = require("../models/Alumnos");
 
//agregar
router.post(("/AlumnosConfig"), async(req, res)=>{
    const saved = schema(req.body);
    await saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}));
})
//ver
router.get(("/AlumnosConfig"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//ver por id
router.get(("/AlumnosConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//actualizar
router.put(("/AlumnosConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    const {nombreCompleto, correo,celular, userName, password,comentarios,userStatus} = req.body;
    await schema.updateOne({_id: id},{ $set: {nombreCompleto, correo,celular, userName, password,comentarios,userStatus}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//eliminar
router.delete(("/AlumnosConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router