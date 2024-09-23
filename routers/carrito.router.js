import express from 'express'
import controladoresCarrito from '../controllers/carritos.controllers.js'

const routerCarrito = express.Router()
routerCarrito.post('/', controladoresCarrito.guardarCarrito)
export default routerCarrito