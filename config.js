const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~QVQBgIAI#_M6KX87QMk7euHtCqavTQ5QZbtthWRYXPhg_yfllSQ0'
};
