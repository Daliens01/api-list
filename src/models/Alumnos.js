const { Schema, model, models} = require("mongoose");

const EschemaAlumnos = new Schema ({ 
    matricula:{
        type: Number,
        trim: true,
        maxlength: [200]
    },nombreCompleto:{
        type: String,
        trim: true,
        maxlength: [200]
    },correo:{
        type: String,
        trim: true,
        maxlength: [100]
    },celular:{
        type: Number,
        trim: true,
        maxlength: [10]
    },userName:{
        type: String,
        trim: true,
        maxlength: [50]
    },password:{
        type: String,
        trim: true,
        maxlength: [50]
    },userStatus:{
        type: String,
        trim: true
    }
},{ 
    timestamps: true,
    versionKey: false
})

module.exports= models.Alumnos || model('Alumnos', EschemaAlumnos)