const { Schema, model, models} = require("mongoose");
  
const AlumnoMateria = new Schema ({
    idAlumno:{ 
        type: Number,
        unique: true,
        trim: true,
        maxlength: [50]
    },idMateria :{
        type: Number,
        unique: true,
        trim: true,
        maxlength: [500]
    },bloque :{
        type: String,
        unique: true,
        trim: true,
        maxlength: [500]
    },fechaInicio :{
        type: Date,
        unique: true,
        trim: true,
        maxlength: [500]
    },fechaFin :{
        type: Date,
        unique: true,
        trim: true,
        maxlength: [500]
    }
},{  
    timestamps: true,
    versionKey: false
})

module.exports= models.AlumnoMateria || model('AlumnoMateria', AlumnoMateria)