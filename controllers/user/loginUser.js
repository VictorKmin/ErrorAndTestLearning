const dataBase = require('../../dataBase').getInstance();
dataBase.setModels();
const tokinazer = require('../../helpers/tokinazer');
module.exports = async (req, res) => {
    try {

        const UserModel = dataBase.getModel('User');
        if (!UserModel) res.sendStatus(500).send({message: "NO CONNECT "});

        const {email, password} = req.body.userInfo;

        const user = await UserModel.findOne({
            where: {
                email,
                password
            }
        });


        if (!user) res.sendStatus(401);

        const {id} = user.dataValues;

        let {accessToken, refreshToken} = tokinazer(id, email);

        res.json({
            success: true,
            message: {
                accessToken,
                refreshToken
            }
        })
    } catch (e) {
        console.log(e);
    }
};
