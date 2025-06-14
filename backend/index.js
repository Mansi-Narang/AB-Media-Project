import express from 'express';
import 'dotenv/config';
import connectMongo from './utils/connectDb.js';
import logger from './utils/logger.js';
import initData from './data/initDestination.js';
import destinationData from './data/destinationData.js';
import destinationModel from './models/destinationModel.js';
import tourPackageData from './data/tourPackageData.js';
import tourPackages from './models/tourPackageModel.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(cors());

app.listen(port, () => {
    logger.success(`Server is listening on port ${port} successfully!`)
});

connectMongo()
.then(() => {
    logger.success('Database Connected!')
   })
   .catch((e) => {
    logger.fatal("Failed to connect you with DataBase-", e.message);
   })

initData(destinationModel, destinationData, 'destinations');
initData(tourPackages, tourPackageData, "Tour Packages");

app.get('/api/destinations', async(req, res) => {
    const destinations = await destinationModel.find({});
    return res.status(200).json({ destinations });
})

app.get('/api/packages/top-selling', async(req, res) => {
    const packages = await tourPackages.find({});
    return res.status(200).json({ packages });
})