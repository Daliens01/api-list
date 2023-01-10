const { Schema, model, models} = require("mongoose");

const SchemaAsignacion = new Schema ({ 
    
    idAlumno:{
        type: String,
        trim: true,
        maxlength: [100]
    },plan :{
        type: String,
        trim: true,
        maxlength: [50]
    },codigoMateria :{
        type: Number,
        trim: true,
        maxlength: [10]
    },sede:{
        type: String,
        trim: true,
        maxlength: [500]
    },comentarios:{
        type: String,
        trim: true,
        maxlength: [500]
    }
},{ 
    timestamps: true,
    versionKey: false
})

module.exports= models.Asignacion || model('Asignacion', SchemaAsignacion)