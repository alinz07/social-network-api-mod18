const router = require("express").Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    addFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById);

router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;
