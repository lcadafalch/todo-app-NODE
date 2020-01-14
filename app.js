const argv = require("./config/yags").argv
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        console.log("muestra todas las tareas");
        break;

    case "actualizar":
        console.log("Actualiza las tareas");
        break;

    default:
        console.log("Comando no reconocido");

}