const SerieModel = require('../models/Serie');
const GenresModel = require('../models/Genre')

const GetCreateSerie = ((req, res, next) => {
    GenresModel.GetAll((genres) => {
        res.render('serie/saveSerie', {
            title: 'Create Serie',
            genresData: genres,
            hasGenres: genres.length > 0,
            editMode: false
        });
    });
})

const GetEditSerie = ((req, res, next) => {
    const id = req.params.serieId;
    SerieModel.GetById(id, (serie) => {

        if(!serie){
            return res.redirect('/serie/index')
        }

        res.render('serie/saveSerie', {
            title: `Edit ${serie?.name}`,
            serie: serie,
            editMode: true
        })
    })
})


const GetAllSerie = ((req, res, next) => {
    SerieModel.GetAll((series) => {
        res.render('serie/index', {
            title: 'Series',
            seriesData: series,
            hasSeries: series.length > 0,
            IsSerieList: true
        });
    });
});

const AddSerie = ((req, res, next)=> {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const genre = req.body.genre;
    const serie = new SerieModel(null, name, imageUrl, genre);
    serie.Save();
    res.status(302).redirect('/');
});

const EditSerie = ((req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const genre = req.body.genre;
    const serie = new SerieModel(id, name, imageUrl, genre);
    serie.Save();
    res.status(302).redirect('/');
})

const DeleteSerie = ((req, res, next)=> {
    const id = req.body.serieId;
    SerieModel.Delete(id);
    res.redirect('/serie/index')
});

module.exports = {
    GetCreateSerie,
    GetAllSerie,
    AddSerie,
    DeleteSerie,
    GetEditSerie,
    EditSerie
};
