const mongoose = require('mongoose');
const Character = mongoose.model('character');


module.exports = (app)=>{

    app.get("/api/character_list", (req, res)=>{

    })


    app.post("/api/create_character", async (req, res)=>{
        console.log(req.body)
        const newCharacter = new Character({
            characterName: req.body.characterName,
            initiative: req.body.initiative,
            avatarURL: req.body.avatarURL,
            activeTurn: req.body.activeTurn,
        })

        await newCharacter.save((err, data)=>{
            return console.log('error', err)
        })
        res.send({test:'we made it'})
    })
}