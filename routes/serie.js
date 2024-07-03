const express = require('express');
const router = express.Router();
const serieController = require('../controllers/serieController');

router.get('/serie/saveSerie', serieController.GetCreateSerie);
router.get('/serie/editSerie/:serieId', serieController.GetEditSerie);
router.get('/serie/index', serieController.GetAllSerie);
router.post('/serie/saveSerie', serieController.AddSerie);
router.post('/serie/serie-delete', serieController.DeleteSerie);
router.post('/serie/editSerie', serieController.EditSerie);

module.exports = router;