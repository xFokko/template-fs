const { Router } = require('express');
const { MovieController } = require('../controllers');

const movieRouter = Router();

movieRouter.get('', (req,res) => new MovieController(req,res).getAll());

module.exports = movieRouter;