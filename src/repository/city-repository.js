const { where } = require('sequelize');
const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({name});
            return city;
        } catch(error) {
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch(error) {
            throw {error};
        }
    } 

    async updateCity(cityId, data) {
        try {
            // return the updated rows in array
            // const city = await City.update( data, {
            //     where: {
            //     id: cityId
            //     }
            // });
            // for getting updated data
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch(error) {
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch(error) {
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch(error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;