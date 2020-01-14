const fs = require("fs");

const guardarDB = () =>{

    let data = JSON.stringify (listadoPorHacer)
    fs.writeFile("base-datos/data.json",data, (err)=>{
        if(err) throw err
    })

}
const cargarDB = () =>{
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

const getlistado = () =>{
    cargarDB();
    return listadoPorHacer;

}






module.exports = {
    crear,
    getlistado
}