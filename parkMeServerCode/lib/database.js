// Module dependencies
const mongoose = require('mongoose'),
      dbConfig = require('./configLoader').databaseConfig,
      connectionString = 'mongodb://' + dbConfig.dbName + ':' + dbConfig.authKey + '@' + dbConfig.dbName + '.documents.azure.com:' + dbConfig.cPort + '/?ssl=true';

      //NOTE: Create new connectionString for local CosmosDB emulator
      
let   connection = null;

class Database {

    open(callback) {
        var options = {
            useMongoClient: true,
            promiseLibrary: global.Promise
        };
        mongoose.connect(connectionString, options, (err) => {
            if (err) {
                console.log('mongoose.connect() failed: ' + err);
            }
        });
        connection = mongoose.connection;

        mongoose.connection.on('error', (err) => {
            console.log('Error connecting to CosmosDB: ' + err);
            callback(err, false);
        });
        
        mongoose.connection.once('open', () => {
            console.log('We have connected to CosmosDB');
            callback(null, true);
        });

    }

    // disconnect from database
    close() {
        connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    }

}

module.exports = new Database();
