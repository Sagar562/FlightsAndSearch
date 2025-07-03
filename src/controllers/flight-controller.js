const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            error: {}
        })
    } catch (error) {
        console.log("Something went wrong in controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            error: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: 'Successfully fetched flights details',
            error: {}
        })
    } catch (error) {
        console.log("Something went wrong in flight controller");
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get flights details',
            error: error
        })
    }
}


module.exports = {
    create,
    getAll
}