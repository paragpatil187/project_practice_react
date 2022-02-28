const { Schema, model } = require("mongoose");
 

const commentSchema = new Schema({
    comment: { type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }



},{
    versionKey: false,
    timestamps: true
});

module.exports = model("comments", commentSchema);