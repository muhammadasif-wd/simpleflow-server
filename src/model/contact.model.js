const { mongoose } = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        min: [3, 'Minimum 3 characters are required'],
        max: [32, 'Maximum 32 characters are required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: [true, 'Give me a valid email'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    }
},
    {
        timestamps: true,
        collection: "contact",
    }
)

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;