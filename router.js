const express = require('express');
const router = express.Router();

const mainController = require('./app/controllers/mainController');


router.get('/', mainController.home);
router.get('/pokemon/:id', mainController.pokemonDetail);
router.get('/types', mainController.showTypes)
router.get('/type/', mainController.pokemonInType)

router.use(mainController.notFound);

module.exports = router;