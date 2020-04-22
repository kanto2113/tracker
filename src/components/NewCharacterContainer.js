import React, { useState } from 'react'
import axios from 'axios'

const NewCharacterContainer = (props) => {
   
    const [ newCharacter, setNewCharacter ] = useState({
        characterName: '',
        initiative: 0, 
        avatarURL: '', 
        activeTurn: false,
    })
   
    const characterNameInputHandler = (e) => {
        
        let cloneCharacter = {...newCharacter, characterName: e.target.value}
        setNewCharacter(cloneCharacter)
    }

    const createNewCharacterButton = async () => {

        const res = await axios.post('/api/create_character', newCharacter)
        console.log(res && res.data)

        setNewCharacter({
            characterName: '',
            initiative: 0, 
            avatarURL: '', 
            activeTurn: false,
        })
    }

    const characterAvatarURLInputHandler = (e) => {

        let cloneCharacter = {...newCharacter, avatarURL: e.target.value}
        setNewCharacter(cloneCharacter)

    }

    return (
        <div>
            <div>
                Character Name
            </div>
            <input 
                value = {newCharacter.characterName}
                onChange = {(e) => {characterNameInputHandler(e)}}
                placeholder="Character Name"
            />
            <div>
                Character Avatar URL
            </div>
            <input 
                value={newCharacter.avatarURL}
                onChange={(e) => {characterAvatarURLInputHandler(e)}}
                placeholder="Avatar URL"
            />
            <br></br>
            <button 
                className="button"
                onClick = {createNewCharacterButton}
            > 
                Create Character
            </button>
        </div>
    )
}



export default NewCharacterContainer