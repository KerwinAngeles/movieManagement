const jsonFileHandler = require('../utils/JsonFileHandler');
const path = require('node:path');
const dataPath = path.join(path.dirname(require.main.filename), "data", "genre.json");

module.exports = class Genre {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    Save(){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (genres) => {
            if(this.id){
                console.log('entro aqui')
                const editGenreIndex = genres.findIndex((g) => g.id === this.id);
                genres[editGenreIndex] = this;
                jsonFileHandler.WriteDataInFile(dataPath, genres);

            }else{
                this.id = Math.random().toString();
                genres.push(this);
                jsonFileHandler.WriteDataInFile(dataPath, genres);
            }
        });
    };

    static GetAll(cb){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (cb));
    };

    static GetById(id, cb){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (genres) => {
            const genre = genres.find((g) => g.id === id);
            cb(genre);
        })
    }

    static Delete(id){
        jsonFileHandler.ReadAllDataFromFile(dataPath, (genres) => {
            const newGenre = genres.filter((g) => g.id !== id);
            jsonFileHandler.WriteDataInFile(dataPath, newGenre);
        })
    }
};