const { Schema, model, models} = require("mongoose");

const SchemaMateria = new Schema ({ 
    nombreMateria:{
        type: String,
        unique: true,
        trim: true,
        maxlength: [100]
    }
},{ 
    timestamps: true,
    versionKey: false
})

module.exports= models.materia || model('Materia', SchemaMateria)