const mongoose = require('mongoose')

const authSchema = mongoose.Schema(
    {
        token: {
            type: String,
            required: [true, 'please add a token'],
            unique: true
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'please add a userID'],
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            expires: 3600,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Auth', authSchema)
