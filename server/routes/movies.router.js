const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all movies
    const queryText = `
        SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) as genres
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

router.put('/:id', (req, res) =>{
    // changing db title and description values based on user edits
    let id = req.body.id;
    let title = req.body.title;
    let desc = req.body.description; 
    const queryText = `
        UPDATE movies SET title = $2, description = $3 WHERE id = $1;
    `;
    const values =  [id, title, desc]
    console.log('REQ BODY IS:', req.body);
    console.log('ROUTER VALUES:', values);
    pool.query(queryText, values)
        .then( (result) => {
            res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error on PUT query ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;
