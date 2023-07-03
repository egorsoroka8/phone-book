const { Phones } = require('../models/models');

class PhoneController {
    async getNumbers(req, res) {
        const numbers = await Phones.findAll();
        return res.status(200).json(numbers);
    }

    async addNumber(req, res) {
        try {
            const { number, country } = req.body;
            const phone = await Phones.create({ number, country });
            return res.status(201).json(phone);
        } catch (e) {
            return res
                .status(409)
                .json({ error: 'Phone number already exist' });
        }
    }

    async removeNumber(req, res) {
        try {
            const { number } = req.body;
            const phone = await Phones.destroy({
                where: {
                    number: number,
                },
            });

            if (phone) {
                return res.status(200).json(number);
            } else {
                return res
                    .status(404)
                    .json({ error: 'Phone number not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new PhoneController();
