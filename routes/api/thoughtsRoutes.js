const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought).post(addReaction);

router.route('/:thoughtId/reactions').post(addReaction).get()

// /api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/reactionId').delete(removeReaction);

module.exports = router;