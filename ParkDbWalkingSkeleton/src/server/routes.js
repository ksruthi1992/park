const express = require('express');
const router = express.Router();
const lotService = require('./lot.service');

router.get('/lots', (req, res) => {
    lotService.getLotsDb(req, res);
 /*
    res.send(200, [
    {"lotId": 1, "lotName": "Lot 1", "lotLocation": "SouthWest", "lotVacancy": 3}
 ])
 */
});

router.post('/lot', (req, res) => {
    lotService.postLotDb(req, res);
  });

module.exports=router;