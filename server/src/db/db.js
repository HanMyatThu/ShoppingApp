import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:IVQLiv4O0ACkL9dJ@testing.r8coyby.mongodb.net/?retryWrites=true&w=majority')
        console.log('db is connected')
    } catch(e) {
        console.log(e)
    }
}

export default connectDb
    