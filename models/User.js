const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+..+/, "must be a valid email format"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// UserSchema.virtual("friendList", {
//     ref: "User",
//     localField: "_id",
//     foreignField: "friends",
//     // justOne: false,
// });

const User = model("User", UserSchema);

module.exports = User;
