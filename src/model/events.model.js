const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const eventsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        min: [10, 'Minimum 10 characters are required'],
        max: [80, 'Maximum 80 characters are required']
    },
    date: {
        type: String,
        required: [true, 'Date is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    }
}, {
    timestamps: true,
    collection: "events",
}
)

const Events = mongoose.model("Events", eventsSchema);
module.exports = Events;