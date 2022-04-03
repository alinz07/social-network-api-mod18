const router = require("express").Router();

const {
    createThought,
    getAllThoughts,
    deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router.route("/:userId").post(createThought);

router.route("/:thoughtId/:userId").delete(deleteThought);

module.exports = router;
