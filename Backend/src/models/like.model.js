const { Schema, model } = require("mongoose");


const likeSchema = new Schema({
    like: { type: Boolean, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true

    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "posts",
        required: true

    }
},{
    versionKey: false,
    timestamps: true
});

module.exports = model("likes", likeSchema);