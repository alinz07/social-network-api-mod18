const router = require("express").Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    addFriend,
    removeFriend,
    updateUser,
    deleteUser,
} = require("../../controllers/user-controller");

router
    .route("/")
    .get(getAllUsers)
    .get(getUserById)
    .put(updateUser)
    .post(createUser)
    .delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
