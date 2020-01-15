const fs = require("fs");

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile("base-datos/data.json", data, (err) => {
        if (err) throw err
    })

}
const cargarDB = () => {
    try {

        listadoPorHacer = require("../base-datos/data.json")

    } catch (error) {

        listadoPorHacer = []
    }

}

let listadoPorHacer = [];


const crear = (descripcion) => {

    cargarDB()

    porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB();
    return porHacer;


}

const getlistado = () => {
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.filter(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
 
        guardarDB();
        return listadoPorHacer;
    } else {
        return false;
    }

}

const borrar = (descripcion) =>{

    cargarDB();

    let index = listadoPorHacer.filter(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index] = "";
 
        guardarDB();
        return true;
    } else {
        return false;
    }



}





module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar

}