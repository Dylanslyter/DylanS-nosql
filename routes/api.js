const express = require('express');
const router = express.Router();

const { getThoughts, updateThought, addThought, removeThought, addReaction, removeReaction } = require('../controllers/api/thoughtController');
const { getUsers, updateUser, addUser, removeUser  } = require('../controllers/api/userController');

router.get('/users', getUsers);
router.put('/users', updateUser);
router.post('/users', addUser);
router.delete('/users', removeUser);

router.get('/thoughts', getThoughts);
router.put('/thoughts', updateThought);
router.post('/thoughts', addThought);
router.delete('/thoughts', removeThought);

router.post('/thoughts/$thought_id/reactions', addReaction);
router.delete('/thoughts/$thought_id/reactions', removeReaction);

module.exports = router;

