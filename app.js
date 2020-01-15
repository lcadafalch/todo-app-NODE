const argv = require("./config/yags").argv
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        let listado = porHacer.getlistado()
        for (const tareas of listado) {
            console.log("==========tareas=========".green)
            console.table(tareas);
            console.log("===================".green)
        }
        break;

    case "actualizar":

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)


        break;

    case "borrar":
        let borrar = porHacer.borrar(argv.descripcion)
        
        console.log(borrar)
        break;

    default:
        console.log("Comando no reconocido");

}