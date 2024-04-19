const db = require('../database/models');
const sequelize = db.sequelize;

//Aquí tienen otra forma de llamar a los modelos creados
const Genres = db.Genre;
const Actors = db.Actor;

const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
        .then(genres => {
                res.render('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;