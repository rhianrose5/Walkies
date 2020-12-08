const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.walks = require("./walk.model.js")(mongoose);
db.facilities = require("./facility.model.js")(mongoose);

module.exports = db;