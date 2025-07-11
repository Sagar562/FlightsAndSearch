const express = require('express');
const { flightMiddlewares } = require('../../middlewares/index');
const router = express.Router();

const { CityController, FlightController, AirplaneController } = require('../../controllers/index');

// city routes
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

// airplane routes
router.post('/airplanes', AirplaneController.create);
router.get('./airplanes/:airplaneId', AirplaneController.get);
router.get('./airplanes', AirplaneController.getAll);
router.delete('./airplanes/:airplaneId', AirplaneController.destroy);
router.patch('./airplanes/:airplaneId', AirplaneController.update);

// flight routes
router.post('/flights', flightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);

module.exports = router;