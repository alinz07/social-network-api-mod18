const router = require("express").Router();

const {
    createThought,
    getAllThoughts,
    getThought,
    deleteThought,
} = require("../../controllers/thought-controller");

router
    .route("/")
    .get(getAllThoughts)
    .get(getThought)
    .delete(deleteThought)
    .post(createThought);

module.exports = router;
