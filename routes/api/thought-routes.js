const router = require("express").Router();

const {
    createThought,
    getAllThoughts,
    getThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
    .route("/:thoughtId")
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
