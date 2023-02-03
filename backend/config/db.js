//config the DB
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo DB connected: ${conn.connection.host}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB