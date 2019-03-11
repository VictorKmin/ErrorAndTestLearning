const dataBse = require('../../dataBase').getInstance();
const client = dataBse.getConnection();
module.exports = async (req, res) => {

    try {
        let users = await client.query('CALL GetUsers()');

        res.json({
            success: true,
            message: users
        })
    } catch (e) {
        console.log(e);
    }
};






