import express from 'express'
import  'dotenv/config' // Libreria para poder importar las variables de entorno como el .env
import routerProductos from './routers/productos.router.js'
import getConection from './utils/get-conection.js'
import cors from 'cors'
import routerCarrito from './routers/carrito.router.js'
//! Variables constantes
const uri_remota = process.env.URI_MONGO

const app = express()
const PORT = process.env.PORT || 2222 // En caso de no encontar la variable PORT en el archivo .env, lo que va a hacer
// es asignarle el valor de 2222
//! Middlewares
app.use(express.json()) // Interpreta el body y lo entiende
app.use(cors()) // Lo desabilito para todas las personas
// Todos los origenes están permitidos
// Usamos render para el backend, es un hosting de backend
//! Rutas
app.use('/api/v1/productos',routerProductos) // Establezco la variable así para acortarla en el routers
app.use('/api/v1/carritos', routerCarrito)
app.get('/', (req, res) => {
  res.redirect('/api/v1/productos')
})
app.all('*', (req, res) => {
    res
    .status(404)
    .json({
        ruta: `${req.url}`,
        metodo: `${req.method}`,
        mensaje : "No se pudo acceder al recurso que están queriendo acceder"
    })
  })
app.listen(PORT, (err) => {
    if (err) {
        throw new Error('No se pudo levantar el servidor', err)
    }
  console.log(`Escuchando en el puerto http://localhost:${PORT}/`)
  getConection(uri_remota)

})
