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
            const airplane = await this.airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong while creating airplane in airplane service");
            throw {error};
        }
    }

    async getAllAirplane() {
        try {
            const airplanes = await this.airplaneRepository.getAllAirplane();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong while getting all airplane in airplane service");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await this.airplaneRepository.deleteAirplane(airplaneId);
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airplane in airplane service");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            const response = await this.updateAirplane(airplaneId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong while updating airplane in airplane service");
            throw {error};
        }
    }
}

module.exports = AirplaneService;