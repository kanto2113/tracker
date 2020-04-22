const mongoose = require('mongoose')
const { Schema } = mongoose

const characterSchema = new Schema ({

    characterName: String,
    initiative: Number,
    activeTurn: Boolean,
    avatarURL: String,
    
})

mongoose.model('character', characterSchema)