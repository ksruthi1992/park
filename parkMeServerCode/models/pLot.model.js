const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Parking Lot Schema Definition
const pLotSchema = new Schema(
    {
        pLotSign: { type: String, required: true, trim: true },
        pLotState: { type: String, required: true, trim: true },
        pLotType: { type: String, required: true, trim: true },
        pLotName: { type: String, required: true, trim: true },
        pLotVacancy: { type: Number, required: true },        
        pLotGeoLat: { type: String, required: true, trim: true },
        pLotGeoLong: { type: String, required: true, trim: true },
        pLotDesc: { type: String, required: true, trim: true }
    }
);

module.exports = mongoose.model('Lot', pLotSchema, 'lots');