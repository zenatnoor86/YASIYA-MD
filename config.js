const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~AQo33S7Z#JDBEdIhh5zl6rJul5HGNDMtVCE1LYKvjt5HpYeeM40I'
};
