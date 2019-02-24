const router = require('express').Router();

const getHouseById = require('../../testLear/controllers/house/getOneById');
const getAllHouse = require('../../testLear/controllers/house/getAll');
const getAllByCity = require('../../testLear/controllers/house/getAllByCity');
const createHouse = require('../../testLear/controllers/house/createHouse');

router.get('/:id', getHouseById);
router.get('/', getAllHouse);
router.get('/:city', getAllByCity);
router.post('/' , createHouse);

module.exports = router;
