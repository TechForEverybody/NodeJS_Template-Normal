import server_configurations from '../../configs/init'
import mongoose from 'mongoose'

mongoose
    .connect(server_configurations.mongodbURL)
    .then(() => {
        console.log('Connected to MongoDB Database')
    })
    .catch((err) => {
        console.log('Database Connection Error', err)
    })
const mongodb = mongoose.connection

export default mongodb
