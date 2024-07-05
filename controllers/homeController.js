const SerieModel = require('../models/Serie');
const GenresModel = require('../models/Genre');

const GetGenres = ((req, res, next) => {
    GenresModel.GetAll((genres) => {
        res.render('home/home', {
            genresData: genres
        });
    });
});

const GetAllSerie = ((req, res, next) => {
    SerieModel.GetAll((series) => {
        GenresModel.GetAll((genres) => {
            res.render('home/home', {
                title: 'Home',
                seriesData: series,
                hasSeries: series.length > 0,
                getSerie: false,
                genresData: genres,
                IsSerieList: true
            });
        }) 
    });
});

const GetSerieByName = ((req, res, next) => {
    const name = req.body.name;
    SerieModel.GetByName(name, (serie) => {
        GenresModel.GetAll((genres) => {
            res.render('home/home', {
                serie: serie,
                getSerie: true,
                hasSerie: serie == undefined,
                genresData: genres
            })
        })
    });
});

const GetSeriesByGenre = ((req, res, next) => {
    const genre = req.body.genre;
    SerieModel.GetSeriesByGenres(genre, (serie) => {
        GenresModel.GetAll((genres) => {
            res.render('home/home', {
                seriesData: serie,
                getSerie: false,
                hasSeries: serie.length > 0,
                genresData: genres
            });
        });
    });
});

module.exports = {
    GetAllSerie,
    GetSerieByName,
    GetGenres,
    GetSeriesByGenre
};