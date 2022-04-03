const req = require("express/lib/request");
const { Thought, User } = require("../models");

const thoughtController = {
    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
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
            .catch((err) => res.status(400).json(err));
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
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({
            _id: params.thoughtId,
        })
            .then((deletedThought) => {
                if (!deletedThought) {
                    return res.status(404).json({
                        message: "No thought found with this id",
                    });
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({
                        message: "No user found with this id",
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
