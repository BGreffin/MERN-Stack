const Shelter = require('../models/shelter.model');

module.exports.findAllShelters = (req,res) => {
    Shelter.find({})
        .then((AllShelters) => res.json(AllShelters))
        .catch((err) => res.status(400).json({err}))
}

module.exports.findOneShelter = (req,res) => {
    Shelter.findOne({_id:req.params.id})
        .then((oneShelter) => res.json(oneShelter))
        .catch((err) => res.status(400).json({err}))
}

module.exports.createShelter = (req,res) => {
    Shelter.create(req.body)
        .then((newShelter) => res.json(newShelter))
        .catch((err) => res.status(400).json({err}))
}

module.exports.updateShelter = (req,res) => {
    Shelter.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then(OneUpdate => res.json(OneUpdate))
        .catch((err) => res.status(400).json({err}))
}

module.exports.deleteShelter = (req,res) => {
    Shelter.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch((err) => res.status(400).json({err}))
}