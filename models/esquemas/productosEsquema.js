import mongoose, { version } from 'mongoose'
// Creamos esquema, la descripción de como va a ser nuestro documento, esto es más a libre del que haga el código
const productoEsquema = mongoose.Schema({
    nombre :{
        type: String,
        require: true, // En caso de usar un email o x, podemos crear un valor único en la base de datos
       // unique: true
    },
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
},{
    // Puede recibir un objeto para poder configurar y sacar el __v, el versionado
    timestamps: true, // CreatedAt UpdatedAt
    versionKey: false
}) // La descripción del documento que estamos creando
export default productoEsquema