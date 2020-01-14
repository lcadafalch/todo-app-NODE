const fs = require("fs");

const guardarDB = () =>{

    let data = JSON.stringify (listadoPorHacer)
    fs.writeFile("base-datos/data.json",data, (err)=>{
        if(err) throw err
    })

}

let listadoPorHacer = [];

const crear = (descripcion) => {


    porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB();
    return porHacer;
}




module.exports = {
    crear
}