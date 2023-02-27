const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((AllJokes) => { res.json({jokes: AllJokes}) })
        .catch((err) => { res.json({message:'Error! Please check your Query'}) })
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id:req.params.id})
        .then((oneJoke) => { res.json({joke: oneJoke}) })
        .catch((err) => { res.json({message: 'Error! Issue finding the Joke'}) })
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newUser => {res.json({user: newUser})})
        .catch((err) => {res.json({message:'Error! Issue creating new User'})})
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((OneUpdate) => {res.json({message: 'Error! Cannot update'})})
        .catch((err) => {res.json({message: 'Error! Cannot update'})})
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {res.json({result: result})})
        .catch((err) => {res.json({message:'Error! Issue in Deleting'})})
}