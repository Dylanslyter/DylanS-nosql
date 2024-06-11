const express = require('express');
const router = express.Router();

const { getThoughts, updateThought, addThought, removeThought, addReaction, removeReaction } = require('../controllers/api/thoughtController');
const { getUsers, updateUser, addUser, removeUser  } = require('../controllers/api/userController');

router.get('/users', getUsers);
router.put('/users', updateUser);
router.post('/users', addUser);
router.delete('/users/:id', removeUser);

router.get('/thoughts', getThoughts);
router.put('/thoughts/:id', updateThought);
router.post('/thoughts', addThought);
router.delete('/thoughts/:id', removeThought);

router.post('/thoughts/:thoughtId/reactions', addReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;

