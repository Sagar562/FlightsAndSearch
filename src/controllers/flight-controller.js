const { FlightService } = require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightData = {
            flightNumber,
            airplaneId,
            departureAirportId,
            arrivalAirportId,
            arrivalTime,
            departureTime,
            price
        } = req.body;
        
        const flight = await flightService.createFlight(flightData);
        return res.status(SuccessCodes.CREATED).json({
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

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.flightId);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Flight Details fetched successfully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in flight controller");
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to get flight details',
            error: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
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

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.flightId, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Flights details updated successffully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in flight controller while updating flight details");
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete flights details',
            error: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await flightService.deleteFlight(req.params.flightId);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Flight details deleted successfully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in flight controller while deleting flight details");
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete flights details',
            error: error
        })
    }
}


module.exports = {
    create,
    get,
    getAll,
    update,
    destroy
}