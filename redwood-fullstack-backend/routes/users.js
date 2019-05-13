const express           = require('express');
const router            = express.Router();

const { index, getById, getByName, getByEmail, create, update, destroy, seedDB } = require('./../controllers/users-controller')

router.get('/', index);
router.get('/:id', getById);
router.get('/name/:name', getByName);
router.get('/email/:email', getByEmail);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/seed', seedDB);

module.exports = router;