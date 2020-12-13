module.exports = mongoose => {
    const Photo = mongoose.model(
        "photo",
        mongoose.Schema({
            walkId: Number,
            walkName: String,
            photo: String
        })
    );

    return Photo;
};