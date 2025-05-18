import * as dotenv from 'dotenv'
dotenv.config({
    path:
        __dirname +
        "/.env." +
        (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase()),
})
console.log(__dirname +"/.env." +(process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase()));    

export default process.env