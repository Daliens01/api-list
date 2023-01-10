const express = require("express");
const mongoose  = require("./src/utils/DBConection");
const app = express();
const port = process.env.PORT || 4000;
const AlumnoRoute = require("./src/routes/AlumnosConfig")
const MateriaRoute = require("./src/routes/MateriasConfig")
const AsignacionRoute = require("./src/routes/AsignacionConfig")
const AlumnoMateria = require("./src/routes/AlumnoMateriaConfig")
const cors = require("cors");
  
app.use(cors());

//middleware
app.use(express.json());
app.use("/api", AlumnoRoute)
app.use("/api", MateriaRoute)
app.use("/api", AsignacionRoute)
app.use("/api", AlumnoMateria)  
//rutas
app.get("/", (req, res) =>{
    res.send("Wellcome to Api-Esi-List");
})

mongoose.DBConection();

app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port));