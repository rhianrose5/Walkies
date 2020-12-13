const db = require("../models");
const Photo = db.photos;

exports.findAll = (req, res) => {
    const walkName = req.query.walkName;

    var condition = walkName ? {
        walkName: walkName
    } : {}

    Photo.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving photos."
            });
        });
};