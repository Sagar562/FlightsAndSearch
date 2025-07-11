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

    async createAirplane(data) {
        try {
            const airplane = await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong while creating airplane in airplane repository");
            throw {error};
        }
    }

    async getAllAirplane() {
        try {
            const airplanes = await Airplane.findAll();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong while getting all airplane in airplane repository");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await Airplane.destroy({
                where: {id: airplaneId }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airplane in airplane repository");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            const response = await Airplane.update(data, {
                where: { id: airplaneId }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while updating airplane in airplane repository");
            throw {error};
        }
    }
    
}

module.exports = AirplaneRepository;