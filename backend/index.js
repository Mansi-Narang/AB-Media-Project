import express from 'express';
import 'dotenv/config';
import connectMongo from './utils/connectDb.js';
import logger from './utils/logger.js';
import initData from './data/initDestination.js';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    logger.success(`Server is listening on port ${port} successfully!`)
})

connectMongo()
.then(() => {
    logger.success('Database Connected!')
   })
   .catch((e) => {
    logger.fatal("Failed to connect you with DataBase-", e.message);
   })
