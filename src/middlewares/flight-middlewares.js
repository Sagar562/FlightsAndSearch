const { ClientErrorCodes } = require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {

    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalida request body for create flight',
            error: 'Missing fields for create flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}