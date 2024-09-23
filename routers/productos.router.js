import express from 'express'
import controladores from '../controllers/productos.controllers.js'
const routerProductos = express.Router()

//! CRUD de productos
// !GET ALL (Read) Request de todosl os productos
routerProductos.get('/', controladores.getAll)
// !GET ONE (Read)
// Tiene que recibir el id del producto

routerProductos.get('/:id', controladores.getOne)
//! POST (Create)

routerProductos.post('/', controladores.create) // http://localhost:8080/api/v1/productos
// ! PUT (Update)

routerProductos.put('/:id', controladores.update)
//! DELETE (Delete)

routerProductos.delete('/:id', controladores.remove)

export default routerProductos