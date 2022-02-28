const { model, Schema} = require("mongoose");
const bcrypt = require ('bcryptjs');

const userSchema = new Schema({
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String , required: true },
    profile_picture: { type: String, required: false},
    about: { type: String, required: false},
    follower:[ {
      type: Schema.Types.ObjectId,
      ref: "users",
      required:false
    }],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false
      }
    ],
    post: [
      {
        type: Schema.Types.ObjectId,
        ref: "posts",
        required: false
      }
    ]

},{
    versionKey:false,
    timestamps: true
});

userSchema.pre ('save', function (next) {
    if (!this.isModified ('password')) return next ();
  
    bcrypt.hash (this.password, 10, (err, hash) => {
      this.password = hash;
      return next ();
    });
  });
  
  userSchema.methods.checkPassword = function (password) {
    return new Promise ((resolve, reject) => {
      bcrypt.compare (password, this.password, function (err, res) {
        if (err) return reject (err);
  
        return resolve (res);
      });
    });
  };

const User = model ( "user", userSchema );

module.exports = User;