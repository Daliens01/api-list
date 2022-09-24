const { connect, connection } = require("mongoose");
require('dotenv').config({ path: '.env'});
 
const conn = {Isconnected: false}
 
async function DBConection (){
    if (conn.Isconnected) return
    const db = await connect("mongodb+srv://root:123@cluster0.0jvuj.mongodb.net/esi-list?retryWrites=true&w=majority");
    conn.Isconnected = db.connections[0].readyState;
}
connection.on("connected", ()=>{console.log("mongodb is connected")});
connection.on("error", (err)=>{console.log(err)});

module.exports  = {DBConection}