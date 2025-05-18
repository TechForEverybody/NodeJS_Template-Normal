import startServer from "./src/app";
import mongodb from "./src/database/mongodb";

mongodb.on('open', () => {
    console.log('Database connected')
    startServer()
})
mongodb.on('error', (error) => {
    console.log('Database connection error', error)
})
mongodb.on('disconnected', () => {
    console.log('Database disconnected')
})
