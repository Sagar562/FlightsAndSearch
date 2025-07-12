const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor () {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepository(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong while creating airport in service");
            throw { error };
        }
    }

    async updateAirport(airportId, data) {
        try {
            const response = await this.airportRepository.updateAirport(airportId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong while updating airport in service");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong while getting one airport in service");
            throw { error };
        }
    }

    async getAllAirport() {
        try {
            const airports = await this.airportRepository.getAllAirport();
            return airports;
        } catch (error) {
            console.log("Something went wrong while getting all airports in service");
            throw { error };
        }
    }
    
    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airport in service");
            throw { error };
        }
    }
}

module.exports = AirportService;