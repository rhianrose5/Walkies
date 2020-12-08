module.exports = mongoose => {
    const Walk = mongoose.model(
        "walk",
        mongoose.Schema({
            walkId: Number,
            walkName: String,
            walkDescription: String,
            longitude: Number,
            latidtude: Number
        })
    );

    return Walk;
};