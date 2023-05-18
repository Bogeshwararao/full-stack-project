const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:[true,"please add the user name"]
    },
    email:{
        type:String,
        require:[true,"please add the user email"],
        unique:[true,"email already taken"]
    },
    password:{
        type:String,
        require:[true,"please add the user password"]
    },
},{
    timestamps:true
});

module.exports = mongoose.model("user", userSchema);
