const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lBxWTaJR#Glu6V1nY_tTTFLhgJYwcecKzF0O24gs1rOHacqgLxY0'
};
