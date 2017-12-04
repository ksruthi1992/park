const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lotSchema = new Schema(
  {
    lotId: { type: Number, required: true, unique: true },
    lotName: String,
    lotLocation: String,
    lotVacancy: Number
  },
  {
    collection: 'ParkingLots'
  }
);

const LotModel = mongoose.model('LotModel', lotSchema);

module.exports = LotModel;