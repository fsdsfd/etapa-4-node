import mongoose from 'mongoose'
const CarritosEsquema = mongoose.Schema( {
    carrito : Array // Va a recibir un array
},
{
    timestamps: true,
    versionKey: false
})
export default CarritosEsquema