const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Lot = require('../models/pLot.model');

class LotsRepository {

// get all the park lots
getLots(callback) {
  console.log('*** LotRepository.getLots');
  Lot.count((err, lotsCount) => {
      let count = lotsCount;
      console.log(`Parking lots count: ${count}`);

      Lot.find({}, (err, lots) => {
          if (err) { 
              console.log(`*** LotsRepository.getLots error: ${err}`); 
              return callback(err); 
          }
          callback(null, {
              count: count,
              lots: lots
          });
      });

  });
}

getPagedLots(skip, top, callback) {
  console.log('*** LotsRepository.getPagedLots');
  Lot.count((err, lotsCount) => {
      let count = lotsCount;
      console.log(`Skip: ${skip} Top: ${top}`);
      console.log(`Parking Lots count: ${count}`);

      Lot.find({})
              .sort({pLotName: 1})
              .skip(skip)
              .limit(top)
              .exec((err, lots) => {
                  if (err) { 
                      console.log(`***  LotsRepository.getPagedLots error: ${err}`); 
                      return callback(err); 
                  }
                  callback(null, {
                      count: count,
                      lots: lots
                  });
              });

  });
}

// get the parking lot summary
getLotsSummary(skip, top, callback) {
  console.log('*** LotsRepository.getLotsSummary');
  Lot.count((err, lotsCount) => {
      let count = lotsCount;
      console.log(`Parking Lots count: ${count}`);

      Lot.find({}, { '_id': 0, 'pLotState': 1, 'pLotType': 1, 'pLotName': 1, 'pLotDescription': 1 })
              .skip(skip)
              .limit(top)
              .exec((err, lotsSummary) => {
                  callback(null, {
                      count: count,
                      lotsSummary: lotsSummary
                  });
              });

  });
}

// get a parking lot
getLot(id, callback) {
  console.log('*** LotsRepository.getLot');
  Lot.findById(id, (err, lot) => {
      if (err) { 
          console.log(`*** LotsRepository.getLot error: ${err}`); 
          return callback(err); 
      }
      callback(null, lot);
  });
}

// insert a parking lot
insertLot(body, callback) {
  console.log('*** LotsRepository.insertLot');
  console.log(state);
  
  let lot = new Lot();

  console.log(body);

  lot.pLotSign = body.pLotSign;
  lot.pLotState = body.pLotState;
  lot.pLotType = body.pLotType;
  lot.pLotName = body.pLotName;
  lot.pLotVacancy = body.pLotVacancy;
  lot.pLotGeoLat = body.pLotGeoLat;
  lot.pLotGeoLong = body.pLotGeoLong;
  lot.pLotDesc = body.pLotDesc;

  lot.save((err, lot) => {
      if (err) { 
          console.log(`*** LotsRepository insertLot error: ${err}`); 
          return callback(err, null); 
      }

      callback(null, lot);
  });
}

updateLot(id, body, callback) {
  console.log('*** LotsRepository.updateLot');

  Lot.findById(id, (err, lot)  => {
      if (err) { 
          console.log(`*** LotsRepository.updateLot error: ${err}`); 
          return callback(err); 
      }

      lot.pLotSign = body.pLotSign || lot.pLotSign;
      lot.pLotState = body.pLotState || lot.pLotState;
      lot.pLotType = body.pLotType || lot.pLotType;
      lot.pLotName = body.pLotName || lot.pLotName;
      lot.pLotVacancy = body.pLotVacancy || lot.pLotVacancy;
      lot.pLotGeoLat = body.pLotGeoLat || lot.pLotGeoLat;
      lot.pLotGeoLong = body.pLotGeoLong || lot.pLotGeoLong;
      lot.pLotDesc = body.pLotDesc || lot.pLotDesc;

      lot.save((err, lot) => {
          if (err) { 
              console.log(`*** LotsRepository.updateLot error: ${err}`); 
              return callback(err, null); 
          }

          callback(null, lot);
      });

  });
}

// delete a parking lot
deleteLot(id, callback) {
  console.log('*** LotsRepository.deleteLot');
  Lot.remove({ '_id': id }, (err, lot) => {
      if (err) { 
          console.log(`*** LotsRepository.deleteLot error: ${err}`); 
          return callback(err, null); 
      }
      callback(null, lot);
  });
}

}

module.exports = new LotsRepository();