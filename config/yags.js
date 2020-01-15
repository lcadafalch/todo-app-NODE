const argv = require("yargs")

.command("crear", "Crear un elemento por hacer", {
    descripcion:{
        demand: true,
        alias:"d",
        desc:"Descripcion de la tarea"
    }
})
.command("actualizar", "actualiza una tarea por hacer", {
    descripcion:{
        demand: true,
        alias:"d",
        desc:"Descripcion de la tarea"
    }, 
    completado:{
        default:true,
        alias:"c",
        desc: "marca una tarea como completada"
    }

})
.command("borrar", "borra una tarea", {
    descripcion:{
        demand: true,
        alias:"-a",
        desc:"Descripcion de la tarea"
    }, 
    completado:{
        default:true,
        alias:"-c",
        desc: "marca una tarea como completada"
    }

})
.help()
.argv;

module.exports ={
    argv                // exporta el objeto
}