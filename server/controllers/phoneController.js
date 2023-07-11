const { Phones } = require('../models/models');
const SocketManager = require('../socket');

class PhoneController {
    async getNumbers(req, res) {
        const numbers = await Phones.findAll();
        return res.status(200).json(numbers);
    }

    async addNumber(req, res) {
        try {
            const { number, country } = req.body;
            const phone = await Phones.create({ number, country });
            SocketManager.addPhone(phone.dataValues.number);

            return res.status(201).json(phone);
        } catch (e) {
            return res
                .status(409)
                .json({ error: 'Phone is already in the list!' });
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
                SocketManager.removePhone(number);
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
