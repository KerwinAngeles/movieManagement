const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const app = express();
const config = require('./config');
const serieRouter = require('./routes/serie');
const homeRouter = require('./routes/home');
const genreRouter = require('./routes/genre');
const errorController = require('./controllers/errorController');


app.use(express.urlencoded({extended: false}));
app.engine('hbs', expressHbs.engine({
    layoutsDir:"views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs"
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(genreRouter);
app.use(serieRouter);
app.use(homeRouter);
app.use("/", errorController.noFound);


app.listen(config.PORT, () => {
    console.log('app running on server: ' + config.PORT)
});
