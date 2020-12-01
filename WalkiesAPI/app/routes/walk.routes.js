module.exports = app => {
    const walks = require("../controllers/walk.controller.js");

    var router = require("express").Router();

    // Retrieve all walks
    router.get("/", walks.findAll);

    // Retrieve a single walks with id
    router.get("/:id", walks.findOne);

    app.use('/api/walks', router);
};