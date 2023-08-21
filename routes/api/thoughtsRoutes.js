const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
} = require('../../controllers/thoughtsController');

// /api/users
router.route('/').get(getAllThoughts).post(createThought);

// /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;