const router = require("express").Router();

const {
    createUser,
    getAllUsers,
    //getUserById,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

//router.route("/:id").get(getUserById);

module.exports = router;
