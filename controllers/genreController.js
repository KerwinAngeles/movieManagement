const GenreModel = require('../models/Genre');
const SerieModel = require('../models/Serie');

const GetCreateGenre = ((req, res, next) => {
    res.render('genre/saveGenre', 
        {
            title: 'Create Genre', 
            editMode: false,
            IsSerieList: true
        })
});

const GetEditGenre = ((req, res, next) => {
    const id = req.params.genreId;
    GenreModel.GetById(id, (genre) => {
        if(!genre){
            return res.redirect('/genre/index')
        }
        res.render('genre/saveGenre', {
            title: `Edit ${genre?.name}`,
            genre: genre,
            editMode: true,
            IsSerieList: true
        });
    });
});

const GetAllGenres = ((req, res, next) => {
    GenreModel.GetAll((genres) => {
        res.render('genre/index', {
            title: "Genres",
            genresData: genres,
            hasGenres: genres.length > 0,
            IsSerieList: true
        });
    });
});

const AddGenre = ((req, res, next) => {
    const name = req.body.name;
    const genre = new GenreModel(null, name);
    genre.Save();
    res.status(302).redirect('/genre/index');
})

const DeleteGenre = ((req, res, next) => {
    const id = req.body.genreId;
    const name = req.body.genreName;
    SerieModel.GetByGenres(name);
    GenreModel.Delete(id);
    res.redirect('/genre/index')
});

const EditGenre = ((req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const genre = new GenreModel(id, name);
    genre.Save();
    res.status(302).redirect('/genre/index');
})

module.exports = {
    GetCreateGenre,
    GetAllGenres,
    AddGenre,
    DeleteGenre,
    EditGenre,
    GetEditGenre
}