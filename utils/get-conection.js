import mongoose from 'mongoose'
const getConection = async (uri_remota)=>{
    try {
      await mongoose.connect(uri_remota); //Acá ponemos la uri
      console.log('Conexión Ok')
    } catch (error) {
      console.log('Conexión Error', error)
    }
  }
export default getConection