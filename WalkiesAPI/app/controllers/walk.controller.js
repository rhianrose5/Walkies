const db = require("../models");
const Walk = db.walks;

// Retrieve all walks from the database.
exports.findAll = (req, res) => {
    const walkId = req.query.walkId;
    var condition = walkId ? {
        walkId: {
            $regex: new RegExp(walkId),
            $options: "i"
        }
    } : {};

    Walk.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single walk with an id
exports.findOne = (req, res) => {
    const walkId = req.params.walkId;

    Walk.findById(walkId)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Not found Tutorial with walkId " + walkId
                });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: "Error retrieving Tutorial with walkId=" + walkId
                });
        });
};