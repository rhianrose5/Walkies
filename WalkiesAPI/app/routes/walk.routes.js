module.exports = app => {
    const walks = require("../controllers/walk.controller.js");
    const facilities = require("../controllers/facility.controller.js");
    const photos = require("../controllers/photo.controller.js");

    var router = require("express").Router();

    // Retrieve all walks
    router.get("/walks/", walks.findAll);

    // Retrieve all facilities
    router.get("/facilities/", facilities.findAll);

    // Retrieve all facilities
    router.get("/photos/", photos.findAll);

    app.use('/api', router);
};