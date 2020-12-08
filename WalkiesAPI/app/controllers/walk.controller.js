const db = require("../models");
const Walk = db.walks;
const Facilities = db.facilities;

exports.findAll = (req, res) => {
    const walkName = req.query.walkName;

    var condition = walkName ? {
        walkName: walkName
    } : {}

    Walk.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving walks."
            });
        });
};