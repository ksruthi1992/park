const lotsRepo = require('../../../lib/lotsRepository'),
    util = require('util');

class LotsController {

constructor(router) {
  router.get('/', this.getLots.bind(this));
  router.get('/page/:skip/:top', this.getLotsPage.bind(this));
  router.get('/:id', this.getLot.bind(this));
  router.post('/', this.insertLot.bind(this));
  router.put('/:id', this.updateLot.bind(this));
  router.delete('/:id', this.deleteLot.bind(this));
}

getLots(req, res) {
  console.log('*** getLots');
  lotsRepo.getLots((err, data) => {
      if (err) {
          console.log('*** getLots error: ' + util.inspect(err));
          res.json(null);
      } else {
          console.log('*** getLots ok');
          res.json(data.lots);
      }
  });
}

getLotsPage(req, res) {
  console.log('*** getLotsPage');
  const topVal = req.params.top,
        skipVal = req.params.skip,
        top = (isNaN(topVal)) ? 10 : +topVal,
        skip = (isNaN(skipVal)) ? 0 : +skipVal;
  console.log('*** calling getPageLots');
  lotsRepo.getPagedLots(skip, top, (err, data) => {
      res.setHeader('X-InlineCount', data.count);
      if (err) {
          console.log('*** getLotsPage error: ' + util.inspect(err));
          res.json(null);
      } else {
          console.log('*** getLotsPage ok');
          res.json(data.lots);
      }
  });
}

getLot(req, res) {
  console.log('*** getLot');
  const id = req.params.id;
  console.log(id);

  lotsRepo.getLot(id, (err, lot) => {
      if (err) {
          console.log('*** getLot error: ' + util.inspect(err));
          res.json(null);
      } else {
          console.log('*** getLot ok');
          res.json(lot);
      }
  });
}

insertLot(req, res) {
  console.log('*** insertLot');

        lotsRepo.insertLot(req.body, (err, lot) => {
              if (err) {
                  console.log('*** LotsRepo.insertLot error: ' + util.inspect(err));
                  res.json({status: false, error: 'Insert failed', lot: null});
              } else {
                  console.log('*** insertLot ok');
                  res.json({ status: true, error: null, lot: lot });
              }
          });

}

updateLot(req, res) {
  console.log('*** updateLot');
  console.log('*** req.body');
  console.log(req.body);


  lotsRepo.updateLot(req.params.id, req.body, (err, lot) => {
    if (err) {
        console.log('*** updateLot error: ' + util.inspect(err));
        res.json({ status: false, error: 'Update failed', lot: null });
    } else {
        console.log('*** updateLot ok');
        res.json({ status: true, error: null, lot: lot });
    }
});

}

deleteLot(req, res) {
  console.log('*** deleteLot');

  lotsRepo.deleteLot(req.params.id, (err) => {
      if (err) {
          console.log('*** deleteLot error: ' + util.inspect(err));
          res.json({ status: false });
      } else {
          console.log('*** deleteLot ok');
          res.json({ status: true });
      }
  });
}

}

module.exports = LotsController;