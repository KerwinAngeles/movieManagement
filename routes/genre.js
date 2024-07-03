const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/genre/saveGenre', genreController.GetCreateGenre);
router.get('/genre/index', genreController.GetAllGenres);
router.get('/genre/editGenre/:genreId', genreController.GetEditGenre);
router.post('/genre/saveGenre', genreController.AddGenre);
router.post('/genre/genre-delete', genreController.DeleteGenre);
router.post('/genre/editGenre', genreController.EditGenre);



module.exports = router;