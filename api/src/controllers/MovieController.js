const { MovieModel } = require("../models")
const BaseController = require("./BaseController");

class MovieController extends BaseController {

    movieModel;

    constructor(req,res) {
        super(req,res);
        this.movieModel = new MovieModel();
    }

    getAll() {
        this.movieModel.getAll()
        .then(([results])=> this.sendJson(results))
    }
}

module.exports = MovieController;