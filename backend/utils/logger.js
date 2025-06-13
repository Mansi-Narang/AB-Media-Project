import pkg from 'signale';
const {Signale} = pkg;

const logger = new Signale();

logger.config({
    displayFilename: false,
    displayTimestamp: true,
    displayDate: true
  }); 

export default logger;