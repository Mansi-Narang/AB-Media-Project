import 'dotenv/config'
import logger from "../utils/logger.js";


async function initData(model, data, name) {
    try {
        await model.deleteMany({});
        logger.success('Deleted data successfully');
        logger.pending(`Adding new ${name} in Database`);
        const result = await model.insertMany(data);
        logger.success(`Successfully inserted ${result.length} ${name} into the database.`);
        
        return ;
    } catch (e) {
        logger.fatal('Issue while connecting with Database', e.message);
    }
}

export default initData;