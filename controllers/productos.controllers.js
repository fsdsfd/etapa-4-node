import modelos from '../models/productos.models.js'
import handleMongoId from '../utils/handle-mongo-id.js'
const getAll = async (req,res)=>{
    try {
        const productos = await modelos.obtenerTodos()
        res.json(handleMongoId(productos))
    } catch (error) {
        console.log('[GETALL]', error)
    }
}

const getOne =  async (req,res)=>{
    try {
        const id = req.params.id
        const producto = await modelos.obtenerUnProducto(id)
        console.log(id)
        res.json(handleMongoId(producto)) // Con esta función le sacamos el _ al _id
    } catch (error) {
       console.log('[GETONE]', error) 
    }

}

const create = async (req,res)=>{
    const producto = req.body

    try {
        const productoCreado = await modelos.crearProducto(producto)
        res.status(201).json(handleMongoId(productoCreado)) // Convierte el _id para que se pueda reproducir en el front
    } catch (error) {
        console.log('create', error)
    }

}
const update = async (req,res)=>{ // recibe el producto editado
    const id = req.params.id
    const productoEditado = req.body
    try {
        const productoActualizado = await modelos.updateProducto(id, productoEditado)
        res.json(handleMongoId(productoActualizado))

    } catch (error) {
        console.log('[update]', error)
    }


}
const remove = async (req,res)=>{ // Delete es una palabra reservada en el lenguaje
    const id = req.params.id
    try {
       const productoBorrado = await modelos.deleteProducto(id)
       console.log(productoBorrado)
        res.json(handleMongoId(productoBorrado))
    } catch (error) {
        console.log('[remove]', error)
    }

}
export default {
    getAll,
    getOne,
    create,
    update,
    remove
}