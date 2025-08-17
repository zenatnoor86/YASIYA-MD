const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~cUwU1C6a#yA2OExAT8j4HiHLeOTMIUY84mHSxNr6N8rK03cgdB-Y'
};
