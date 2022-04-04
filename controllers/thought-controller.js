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
    getThought({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
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
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
            new: true,
            runValidators: true,
        }).then((dbThoughtData) => {
            if (!dbThoughtData) {
                res.status(404).json({
                    message: "No thought found with this id",
                });
                return;
            }
            res.json(dbThoughtData);
        });
    },
    deleteThought({ params, body }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then((deletedThought) => {
                if (!deletedThought) {
                    return res.status(404).json({
                        message: "No thought found with this id",
                    });
                }
                // res.json(deletedThought);
                return User.findOneAndUpdate(
                    { username: body.username },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true, runValidators: true }
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
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(400).json({
                        message: "No pizza found with this id",
                    });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then((dbThoughtData) => {
                // if (!dbThoughtData) {
                //     return res.status(404).json({
                //         message: "No Thought found with this id",
                //     });
                // }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = thoughtController;
