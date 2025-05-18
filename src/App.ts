import express from 'express';
import cors from 'cors';
import session from "express-session";
import server_configurations from './configs/init';

const app = express();
app.use(cors(
    {
        origin: '*'
    }
))
app.use(
    session({
        secret: server_configurations.secretKey,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.static('Public'))
app.set("view engine", "ejs");

async function startServer() {
    app.listen(server_configurations.serverPort, server_configurations.serverHost, () => {
        console.log(`Server listening at http://${server_configurations.serverHost}:${server_configurations.serverPort}`);
    });
}

export default startServer