const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.GetAllSerie);
router.post('/get-serie-by-name', homeController.GetSerieByName);
router.post('/get-serie-by-genre', homeController.GetSeriesByGenre);

module.exports = router;