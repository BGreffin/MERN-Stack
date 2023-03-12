const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    petName: { type: String,
        minLength: [3,"The name should be at least three characters"],
        required: [true,"A name is required"]},
    petType: { type: String,
        minLength: [3,"The type should be at least three characters"],
        required: [true,"A type is required"]} ,
    description: { type: String,
        minLength: [3,"The name should be at least three characters"],
        required: [true,"A description is required"]},
    skills1: {type: String},
    skills2: {type: String},
    skills3: {type: String}
    },
    { timestamps: true}
);

const Shelter = mongoose.model('Shelter', ShelterSchema);

module.exports = Shelter;