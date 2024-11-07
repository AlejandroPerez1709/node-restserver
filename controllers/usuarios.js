const {response} = require('express');


const usuariosGet = (req, res = response) => {

    const {id, nombre, apikey} = req.query;

    res.json({
        ok:true,
        msg: 'get API - Controlador',
        id,
        nombre,
        apikey
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        ok:true,
        msg: 'post API',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
         ok:true,
         msg: 'Usuarios put API',
         id
     })
 }
 
const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'patch API'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'delete API'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}