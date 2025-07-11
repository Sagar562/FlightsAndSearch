const { AirplaneService } = require('../services/index');
const { ServerErrorCodes, SuccessCodes } = require('../utils/error-codes');

const airplaneService = new AirplaneService();

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.airplaneId);
        return res.status(SuccessCodes.OK).json({
            data: airplane,
            success: true,
            message: 'Airplane data fetched successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while fetching airplane data',
            error: error
        });
    }
}

const create = async (req, res) => {
    try {
        const airplaneData = { modelNumber, capacity } = req.body;

        const airplane = await airplaneService.createAirplane(airplaneData);
        return res.status(SuccessCodes.CREATED).json({
            data: airplane,
            success: true,
            message: 'Airplane data created successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while creating airplane',
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAllAirplane();
        return res.status(SuccessCodes.OK).json({
            data: airplanes,
            success: true,
            message: 'All airplane details fetched successfull',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while getting all airplanes data',
            error: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airplaneService.deleteAirplane(req.params.airplaneId);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Airplane deleted successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while deleting airplane',
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await airplaneService.updateAirplane(req.params.airplaneId, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Airplane details updated successfully',
            error: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Error while updating airplane',
            error: error
        });
    }
}
module.exports = {
    get,
    create,
    getAll,
    destroy,
    update
}