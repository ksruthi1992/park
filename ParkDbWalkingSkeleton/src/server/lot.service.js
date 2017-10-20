const LotModel = require('./lot.model');

require('./mongo').connect();

function getLotsDb(req, res) {
  const docquery = LotModel.find({});
  docquery
    .exec()
    .then(lots => {
      res.status(200).json(lots);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postLotDb(req, res) {
    const pLot = { lotId: req.body.lotId, lotName: req.body.lotName, lotLocation: req.body.lotLocation, lotVacancy: req.body.lotVacancy };
    const lLot = new LotModel(pLot);

    lLot.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(lLot);
      console.log('Lot created successfully!');
    });
  }
  
  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }

module.exports = {
  getLotsDb,
  postLotDb
};