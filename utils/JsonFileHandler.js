const fs = require('node:fs');

const ReadAllDataFromFile = (pathData, callback) => {
    fs.readFile(pathData, (error, data) => {
        if(error){
            callback([]);
        }else{
            callback(JSON.parse(data));
        }
    });
};

const WriteDataInFile = (pathData, data) => {
    fs.writeFile(pathData, JSON.stringify(data), (error) => {
        console.log(error);
    });
};

module.exports= {
    ReadAllDataFromFile,
    WriteDataInFile
};