const Avmaint = require('../models').Avmaint;

const constants = require('../constants');

const getAll = (req, res) => {
    Avmaint.findAll()
    .then(avmaints => {
//      use the below line res.json(cities) to make your data work like an
//      API built like project 2 except changing the way it works in
//      you controller. This allows you to control the format of the API
        res.json(avmaints);
//      The line below was the original as cloned down. The line above
//      replaced it.
//      res.status(constants.SUCCESS).json(cities)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getAll,
    getCityById
}