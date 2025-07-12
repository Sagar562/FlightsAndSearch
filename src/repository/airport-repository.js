const { Airport } = require('../models/index');

class AirportRepository {
    
    async createAirport(data) {
        try {
            const airport = await Airport.create(req.body);
            return airport;
        } catch (error) {
            console.log("Something went wrong while creating airport in repository");
            throw { error };
        }
    }

    async updateAirport(airportId, data) {
        try {
            const response = await Airport.update(data, {
                where: {
                    id: airportId
                }
            });
            return 
        } catch (error) {
            console.log("Something went wrong while updating airport in repository");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong while getting one airport in repository");
            throw { error };
        }
    }

    async getAllAirport() {
        try {
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong while getting all airports in repository");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await Airport.destroy({
                where: { id: airportId }
            });
            return response
        } catch (error) {
            console.log("Something went wrong while deleting airport in repository");
            throw { error };
        }
    }
}

module.exports = AirportRepository;