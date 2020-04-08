import React, { useState } from 'react'

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

    const createNewCharacterButton = () => {

        let cloneCharacterList = [...props.characterList]
        cloneCharacterList.push(newCharacter)
        props.setCharacterList(cloneCharacterList)
    }

    return (
        <div>
            <input 
                value = {newCharacter.characterName}
                onChange = {(e) => {characterNameInputHandler(e)}}
            />
            <button onClick = {createNewCharacterButton}> 
                Create Character
            </button>
        </div>
    )
}



export default NewCharacterContainer