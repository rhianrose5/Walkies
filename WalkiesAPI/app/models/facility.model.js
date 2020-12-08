module.exports = mongoose => {
    const Facility = mongoose.model(
        "facility",
        mongoose.Schema({
            walkId: Number,
            walkName: String,
            facilities: Array
        })
    );

    return Facility;
};