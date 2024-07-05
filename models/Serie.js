const jsonFileHandler = require('../utils/JsonFileHandler');
const path = require('node:path');
const dataPath = path.join(path.dirname(require.main.filename), "data", "serie.json");

module.exports = class Serie {
    constructor(id, name, imageUrl, genre, videoUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.genre = genre;
        this.videoUrl = videoUrl
    }

    Save(){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (series) => {
            console.log('el id es:' + this.id)
            if(this.id){
                const editSerieIndex = series.findIndex((s) => s.id === this.id);
                series[editSerieIndex] = this;
                jsonFileHandler.WriteDataInFile(dataPath, series);
            }else{
                this.id = Math.random().toString();
                series.push(this);
                jsonFileHandler.WriteDataInFile(dataPath, series);
            };
        });
    };

    static GetAll(cb){
        jsonFileHandler.ReadAllDataFromFile(dataPath, cb);
    };

    static GetSeriesByGenres(genres, cb){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (series) => {
            console.log(genres);
            const serie = series.filter((s) => s.genre === genres)
            cb(serie);
        });
    };

    static GetById(id, cb){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (series) => {
            const serie = series.find((s) => s.id === id);
            cb(serie);
        });
    };

    static GetByName(name, cb){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (series) => {
            const serie = series.find((s) => s.name === name);
            console.log(serie);
            cb(serie);
        })
    }

    static GetByGenres(genreName){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (genres) => {
            const genre = genres.filter((s) => s.genre !== genreName);
            console.log(genre);
            jsonFileHandler.WriteDataInFile(dataPath, genre);
        });
    }

    static Delete(id){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (series) => {
            const newSeries = series.filter((s) => s.id !== id);
            jsonFileHandler.WriteDataInFile(dataPath, newSeries);
        });
    };
};