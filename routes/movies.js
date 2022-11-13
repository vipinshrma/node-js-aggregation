const express = require('express')
const Movie = require('../models/Movies')

const router = express.Router()

router.get('/', async (req, res) => {
    const movies = await Movie.find({})
    res.status(200).send({ message: "Welcome to the world", data: movies })
})

router.get('/search', async (req, res) => {
    const params = req.query;
    const { search, limit = 10, genre, imdb, page = 1 } = params
    // const result = await Movie.find({Title:{$regex:search}})
    const result = await Movie.aggregate(
        [
            // {
            //     $match:{Title:{$regex:search}}
            // },
            {
                $match: { $and: [{ "Major Genre": genre }, { "IMDB Rating": { $gte: +imdb ,$lte:5 } },{ "Production Budget": { $lte: 800000 } }] }
            },
            // {
            //     $match: { "Production Budget": { $lte: 800000 } }
            // },
            // {
            //     $count: "passing_scores"
            //   },
            // {
            //     $skip: parseInt(limit * page) - limit
            // },
            // {
            //     $limit: +limit
            // },

            {
                $facet: {
                    results: [{ $skip: parseInt(limit * page) - limit }, { $limit: +limit }, { $sort: { "Title": 1 }}],
                    total:[{$count:"totalRecord"}]
                }
            }

        ]
    )
    res.status(200).send({ data: result })
})

module.exports = router;