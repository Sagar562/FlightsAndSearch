const { AirportService } = require('../services/index');
const { ServerErrorCodes, SuccessCodes } = require('../utils/error-codes');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: airport,
            success: true,
            message: 'Airport created successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while creating airport in controller',
            error: error
        });
    } 
}

const update = async (req, res) => {
    try{
        const response = await airportService.updateAirport(req.params.airportId, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Airport details updated successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while updating airport in controller',
            error: error
        });
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.airportId);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: 'Airport details fetched successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while getting one airport in controller',
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAllAirport();
        return res.status(SuccessCodes.OK).json({
            data: airports,
            success: true,
            message: 'Airports details fetched successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while getting all airports in controller',
            error: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.airportId);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Airport deleted successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while deleting airport in controller',
            error: error
        });
    }
}
module.exports = {
    create,
    update,
    get,
    getAll,
    destroy
}
