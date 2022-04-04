const router = require("express").Router();

const {
    createThought,
    getAllThoughts,
    getThought,
    deleteThought,
    updateThought,
} = require("../../controllers/thought-controller");

router
    .route("/")
    .get(getAllThoughts)
    .get(getThought)
    .delete(deleteThought)
    .post(createThought)
    .put(updateThought);

module.exports = router;
