const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 or more characters"],
        unique: [true, "That name is already in use"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be 3 characters or more"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or more"]
    },
    
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },

    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true}).plugin(uniqueValidator, { message : "There is already a pet with that name"});

mongoose.model("Pet", PetSchema);