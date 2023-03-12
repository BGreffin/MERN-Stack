const ShelterController = require('../controllers/shelter.controller');

module.exports = (app) => {
    app.get('/api/shelters',ShelterController.findAllShelters);
    app.post('/api/shelters/new',ShelterController.createShelter);
    app.get('/api/shelters/:id',ShelterController.findOneShelter); 
    app.put('/api/shelters/:id',ShelterController.updateShelter);
    app.delete('/api/shelters/:id',ShelterController.deleteShelter);
} 