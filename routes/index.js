const express = require('express');
const router = express.Router();
const { signup, login, deck, pokemonList, pokemonDetail, favorite } = require('../controllers/homeController');
const withAuth  = require('../utils/auth');

router.get ('/signup', signup)
router.get ('/', login)
router.get ('/deck', withAuth, deck)
router.get ('/pokemon', withAuth, pokemonList)
router.get ('/favorite', withAuth, favorite)
router.get('/pokemon/:name', withAuth, pokemonDetail);

module.exports = router;