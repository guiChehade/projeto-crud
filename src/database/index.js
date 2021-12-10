const mongoose = require('mongoose');

function connect() {

    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

    const db = mongoose.connection;

    db.once('open', () => console.log('Conexão com o MongoDB estabelecida com sucesso!'));
    db.on('error', console.error.bind(console, 'Connection error: '));
}

module.exports = {
    connect
}