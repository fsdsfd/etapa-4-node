import mongoose from 'mongoose' // No es importante, solo se importa un mongoose, no uno por cada archivo, pero se tiene que importar en cada archivo que lo usemos
import productoEsquema from './esquemas/productosEsquema.js'
const productoModelo = mongoose.model('productos', productoEsquema )
const obtenerTodos = async ()=>{
    try {
        const productos = await productoModelo.find()
        // console.log(productos)
        return productos
    } catch (error) {
        console.log('[obtenerTodos]', error)
    }
}
const obtenerUnProducto= async(id)=>{ // http://localhost:8080/api/v1/productos/653b0221c1bfb6ecef75a881
    try {
        // const producto = await productoModelo.findById(id) Se puede hacer así o 
        //const producto = await ProductosModelo.find({ _id: id}) hacen exactamente lo mismo
        const producto = await productoModelo.findById(id) // Es mejor este porque es más legible
        console.log(producto)
        return producto
    } catch (error) {
        console.log('[ObtenerUnProducto]', error)
    }
}
const crearProducto= async (producto)=>{
    try {
        // Hay 2 formas con mongoose: Primera:
       // const docMongooseProducto = new productoModelo(producto) // Creo una nueva instancia de un producto
       // const productoCreado = await docMongooseProducto.save() // Guarda en la db   
       // console.log(productoCreado)
        //? Segunda:
        const productoCreado = await productoModelo.create(producto) // Es más directa
        // console.log(productoCreado) Cuando ya estamos seguros que funciona, retornamos el producto creado
        return productoCreado
    } catch (error) {
        console.log('[obtenerTodos]', error)
    }
}
const updateProducto= async(id,productoEditado)=>{
    try {
        const options = {new : true} // Para que nos devuelva la versión más reciente 
        const productoYaEditado = await productoModelo.findByIdAndUpdate(id, productoEditado,options) // Nos devuelve producto ya editado
        console.log(productoYaEditado)
        return productoYaEditado
    } catch (error) {
        throw error // Para que este error se muestre más arriba, en controllers, la función que usa este updateProducto, le ponemos throw
    // Se pone throw error y no new porque ya existe
    }
}
const deleteProducto =async(id)=>{
    try {
        const productoBorrado = await productoModelo.findByIdAndDelete(id)
        return productoBorrado
    } catch (error) {
        console.log('DeleteProducto', error)
    }
}
export default{
obtenerTodos,
obtenerUnProducto,
crearProducto,
updateProducto,
deleteProducto
}