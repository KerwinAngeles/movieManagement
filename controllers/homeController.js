const SerieModel = require('../models/Serie');

const GetAllSerie = ((req, res, next) => {
    SerieModel.GetAll((series) => {
        res.render('home/home', {
            title: 'Home',
            seriesData: series,
            hasSeries: series.length > 0
        });
    });
});


module.exports = {
    GetAllSerie
};