const moment = require('moment')

//simple middleware function
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);//logs the url that's hit and the date
    next();
};

module.exports = logger;