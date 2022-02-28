const {Schema, model} = require("mongoose");


const postSchema = new Schema({
    picture: { type: String, required: false},
    video: { type: String, required: false},
    caption:{ type: String, required: false},
    user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
        
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: false
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref:"comments",
            required: false
        }
    ]
},{
    versionKey: false,
    timestamps: true
});


module.exports = model("posts", postSchema);