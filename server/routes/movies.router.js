const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all movies
    const queryText = `
        SELECT movies.title, movies.poster, movies.description, array_agg(genres.name) as genres
        FROM movies 
        JOIN movie_genre ON movies.id = movie_genre.movies_id
        JOIN genres ON genres.id = movie_genre.genres_id
        GROUP BY movies.id
        ORDER BY title;
    `;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;