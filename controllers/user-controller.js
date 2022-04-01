const { User } = require("../models");
const userController = {
    createUser({ body }, res) {
        User.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(400).json(err));
    },
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: "thoughts",
                select: "-__v",
            })
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
};

module.exports = userController;
