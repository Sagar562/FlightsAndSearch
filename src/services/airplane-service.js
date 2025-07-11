const { AirplaneRepository } = require('../repository/index');

class AirplaneService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async getAirplane(id) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong while getting airplane by id in airplane service");
            throw {error};
        }
    }

    async createAirplane(data) {
        try{
            const airplane = await this.airplaneRepository.createAirport(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong while creating airplane in airplane service");
            throw {error};
        }
    }

    async getAllAirplan() {
        try {
            const airplanes = await this.airplaneRepository.getAllAirplan();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong while getting all airplane in airplane service");
            throw {error};
        }
    }
}

module.exports = AirplaneService;