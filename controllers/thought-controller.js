const req = require("express/lib/request");
const { Thought, User } = require("../models");

const thoughtController = {
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                console.log(_id);
                return User.findOneAndUpdate(
                    { username: body.username },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({
                        message: "No user found with this id",
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getAllThoughts(req, res) {
        Thought.find()
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getThought({ body }, res) {
        Thought.findOne({ _id: body.thoughtId })
            .then((dbThoughtData) => {
                //if no pizza is found
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: "No thought found with this id",
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    deleteThought({ body }, res) {
        Thought.findOneAndDelete({ _id: body.thoughtId })
            .then((deletedThought) => {
                if (!deletedThought) {
                    return res.status(404).json({
                        message: "No thought found with this id",
                    });
                }
                // res.json(deletedThought);
                return User.findOneAndUpdate(
                    { username: body.username },
                    { $pull: { thoughts: body.thoughtId } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({
                        message: "No user found with this username",
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = thoughtController;
