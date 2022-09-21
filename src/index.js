const express = require("express")
const  mongoose  = require("./utils/DBConection")
const app = express()
const port = process.env.PORT || 4000
const AlumnoRoute = require("./routes/AlumnosConfig")
const MateriaRoute = require("./routes/MateriasConfig")
const AsignacionRoute = require("./routes/AsignacionConfig")
const cors = require("cors")
app.use(cors())
//middleware
app.use(express.json())
app.use("/api", AlumnoRoute)
app.use("/api", MateriaRoute)
app.use("/api", AsignacionRoute)
  
//rutas
app.get("/", (req, res) =>{
    res.send("Weladassdasdasdlcome to Api-Esi-List")
})
 
mongoose.DBConection()

app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port))