const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//Parking Space Schema Definition
const pSpaceSchema = new Schema(
{
    pSpaceId: { type: Number, required: true },
    pSpaceState: { type: String, required: true, trim: true },
    pSpaceResv: { type: String, required: true, trim: true },
    pLotGeoLat: { type: String, required: true, trim: true },
    pLotGeoLong: { type: String, required: true, trim: true }
},
{
    collection: 'Parking'
}
);

module.exports = mongoose.model('pSpace', pSpaceSchema);