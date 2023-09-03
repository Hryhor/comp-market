const mongoose = require('mongoose');

const userShema =  mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        telephone: {
            type: String,
            required: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        avatarUrl: String, 
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("User", userShema);