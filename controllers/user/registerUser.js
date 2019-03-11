const dataBase = require('../../dataBase').getInstance();
const CustomError = require('../../helpers/errorHandler');
const client = dataBase.getConnection();
module.exports = async (req, res) => {
    try {

        if (!client) res.status(500).send({message: 'No connection'});
        const {email, password, name} = req.body.userInfo;
        /**
         * This procedure check if we have user in dataBase
         * If user already exist we return undefined
         * If user was inserted we return inserted user
         */
            // CREATE PROCEDURE RegisterUser(IN $email VARCHAR(45), IN $pass VARCHAR(45), IN $name VARCHAR(45), IN $date TIMESTAMP)
            // BEGIN
            // IF NOT EXISTS(SELECT *
            //     FROM user
            // WHERE email = $email
            // AND password = $pass
            // LIMIT 1)
            // THEN
            // INSERT INTO user(id, name, email, password, created_at)
            // VALUES (DEFAULT, $name, $email, $pass, $date);
            // SELECT * FROM user WHERE email = $email;
            // END IF;
            // END;

        const query = `CALL RegisterUser(
                            '${email}', 
                            '${password}', 
                            '${name}', 
                            '${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}')`;

        const user = await client.query(query);

        console.log('__________________');
        console.log(user);
        console.log('__________________');

        if (!user) throw new Error('User already crated');

        console.log('5345353534534');

        const t = await client.query('CALL GetUsers()');

        console.log(t);

        res.json({
            success: true,
            message: "User is created"
        })

    } catch (e) {
        
    }
};
