import 'dotenv/config'
import destinationModel from "../models/destinationModel.js";
import destinationData from "./destinationData.js";
import logger from "../utils/logger.js";
import connectMongo from "../utils/connectDb.js";


async function initData() {
    try {
        await connectMongo();
        await destinationModel.deleteMany({});
        logger.success('Deleted data successfully');
        logger.pending('Adding new Destinations in Database');
        const result = await destinationModel.insertMany(destinationData);
        
        logger.success(`Successfully inserted ${result.length} destinations into the database.`);
        
        return ;
    } catch (e) {
        logger.fatal('Issue while connecting with Database', e.message);
    }
}
initData();

export default initData;