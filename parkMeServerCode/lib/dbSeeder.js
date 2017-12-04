// Module dependencies
const   mongoose = require('mongoose'),
        Lot = require('../models/pLot.model'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = 'mongodb://' + dbConfig.dbName + ':' + dbConfig.authKey + '@' + dbConfig.dbName + '.documents.azure.com:' + dbConfig.cPort + '/?ssl=true',
        //connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}` ,
        connection = null;

 
class DBSeeder {
    
    init() {
        console.log('Checking DBSeeder...');

        mongoose.connection.db.listCollections({name: 'lots'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    } 
                });
    }
    
    seed() {

        console.log('Seeding data....');

        // Parking Lots
        var seed_pLots = [
            { "pLotSign": "redlight", "pLotState": "Suspended", "pLotType": "Faculty/Staff", "pLotName": "Parking Lot 1 (Staff)", "pLotVacancy": 0, "pLotGeoLat": "38.564527", "pLotGeoLong": "-121.428441", "pLotDesc": "State University Dr / Arboretum Way" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Residence", "pLotName": "Parking Lot 2 (Residence)", "pLotVacancy": 7, "pLotGeoLat": "38.5652", "pLotGeoLong": "-121.425085", "pLotDesc": "State University Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Faculty/Staff", "pLotName": "Parking Lot 2A (Staff)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Residence", "pLotName": "Parking Lot 2A (Residence)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dry" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Disabled", "pLotName": "Parking Lot 3 (Disabled)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dr / Unknown" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Disabled", "pLotName": "Parking Lot 5 (Disabled)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "Redbud Way" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Faculty/Staff", "pLotName": "Parking Lot 6 (Staff)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "Stadium Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Faculty/Staff", "pLotName": "Parking Lot 7 (Staff)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dr / E.A. Fairbairn" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Student", "pLotName": "Parking Lot 7 (Student)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dr / College Town Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Faculty/Staff", "pLotName": "Parking Lot 8 (Staff)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "College Town Dr / Stadium Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Student", "pLotName": "Parking Lot 8 (Student)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dr / College Town Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Faculty/Staff", "pLotName": "Parking Lot 9 (Staff)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "State University Dr / Folsom Blvd" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Student", "pLotName": "Parking Lot 9 (Student)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "Folsom Blvd / State University Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Student", "pLotName": "Parking Lot 10 (Student)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "College Town Dr / Stadium Dr" },
            { "pLotSign": "greenlight", "pLotState": "Active", "pLotType": "Residence", "pLotName": "Parking Lot 11 (Residence)", "pLotVacancy": 7, "pLotGeoLat": "38.", "pLotGeoLong": "-121.", "pLotDesc": "J St / Carlson Dr" }
        ];
            
        var l = seed_pLots.length,
            i;

        Lot.remove({});

        for (i = 0; i < l; i++) {

            var l_lot = new Lot({
                'pLotSign': seed_pLots[i].pLotSign,
                'pLotState': seed_pLots[i].pLotState,
                'pLotType': seed_pLots[i].pLotType,
                'pLotName': seed_pLots[i].pLotName,
                'pLotVacancy': seed_pLots[i].pLotVacancy,
                'pLotGeoLat': seed_pLots[i].pLotGeoLat,
                'pLotGeoLong': seed_pLots[i].pLotGeoLong,
                'pLotDesc': seed_pLots[i].pLotDesc
            });

            //l_lot.save();

            l_lot.save((err, lot) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Inserted parking lot: ' + lot.pLotName + ' ' + lot.pLotDesc);
                }
            });
        }
    }
}

module.exports = new DBSeeder();




