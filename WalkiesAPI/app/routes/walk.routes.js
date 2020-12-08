module.exports = app => {
    const walks = require("../controllers/walk.controller.js");

    var router = require("express").Router();

    // Retrieve all walks
    router.get("/", walks.findAll);

    app.use('/api/walks', router);
};