const { Airplane } = require('../models/index');

class AirplaneRepository {

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane repository");
            throw {error};
        }
    }

    async createAirport(data) {
        try {
            const airplane = await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong while creating airplane in airplane repository");
            throw {error};
        }
    }

    async getAllAirplan() {
        try {
            const airplanes = await Airplane.findAll();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong while getting all airplane in airplane repository");
            throw {error};
        }
    }
    
}

module.exports = AirplaneRepository;