const express = require("express");
const router = express.Router();
const schema = require("../models/Materias");
 
//agregar
router.post(("/MateriasConfig"), async(req, res)=>{
    const saved = schema(req.body);
    await saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}));
})
//ver
router.get(("/MateriasConfig"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//ver por id
router.get(("/MateriasConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//actualizar
router.put(("/MateriasConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    const {nombreMateria} = req.body;
    await schema.updateOne({_id: id},{ $set: {nombreMateria}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//eliminar
router.delete(("/MateriasConfig/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router