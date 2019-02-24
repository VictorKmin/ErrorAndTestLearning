const dataBase = require('../../../nodeApi/dataBase').getInstance();
const tokenVerificator = require('../../../nodeApi/helpers/tokenVerificator');
const {secret} = require('../../config/secrets');

module.exports = async (req, res) => {
    try {

        const HouserModel = dataBase.getModel('HouseModel');

        if (!token) throw new Error('Not authorized');

        const {room_count, squeare, price, city} = req.body;

        const {id} = tokenVerificator(token, secret);

        await HouserModel.create({
            user_id: id,
            room_count,
            squeare,
            price,
            city,
            created_at: new Date().toISOString()
        });


        res.json({
            success: true,
            message: "House is created"
        })

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};
