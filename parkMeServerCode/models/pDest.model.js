const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//Destination Schema Definition
const pDestSchema = new Schema(
{
    pDestId: { type: Number, required: true },
    pDestName: { type: String, required: true, trim: true },
    pDestDesc: { type: String, required: true, trim: true },
    pDestGeoLat: { type: String, required: true, trim: true },
    pDestGeoLong: { type: String, required: true, trim: true }
},
{
    collection: 'Parking'
}
);

module.exports = mongoose.model('pDest', pDestSchema);