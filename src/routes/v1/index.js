const express = require('express');
const { flightMiddlewares } = require('../../middlewares/index');
const router = express.Router();

const { CityController, FlightController, AirplaneController, AirportController} = require('../../controllers/index');

// airport routes
router.get('/airports', AirportController.getAll);
router.get('/airports/:airportId', AirportController.get);
router.post('/airports', AirportController.create);
router.patch('/airports/:airportId', AirportController.update);
router.delete('/airports/:airportId', AirportController.destroy);

// city routes
router.get('/cities', CityController.getAll);
router.get('/cities/:id', CityController.get);
router.post('/cities', CityController.create);
router.patch('/cities/:id', CityController.update);
router.delete('/cities/:id', CityController.destroy);

// airplane routes
router.get('/airplanes', AirplaneController.getAll);
router.get('/airplanes/:airplaneId', AirplaneController.get);
router.post('/airplanes', AirplaneController.create);
router.patch('/airplanes/:airplaneId', AirplaneController.update);
router.delete('/airplanes/:airplaneId', AirplaneController.destroy);

// flight routes
router.get('/flights', FlightController.getAll);
router.get('/flights/:flightId', FlightController.get);
router.post('/flights', flightMiddlewares.validateCreateFlight, FlightController.create);
router.patch('/flights/:flightId', FlightController.update);
router.delete('/flights/:flightId', FlightController.destroy);

module.exports = router;