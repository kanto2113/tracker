import React, { useEffect, useContext } from 'react'
import TurnSelector from './TurnSelector'
import { CharacterListContext } from '../App'

const CharacterCardContainer = (props) => {
    
    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    useEffect(() => {
        if(props.character.activeTurn){
            let cardEl = document.getElementById(`card for ${props.character.characterName}`)

            cardEl.style.transform = "scale(1.2) translate(0, -6%)"
        }else{
            let cardEl = document.getElementById(`card for ${props.character.characterName}`)

            cardEl.style.transform = "scale(1) translate(0, 0)"
        }
    }, [props.character.activeTurn])

    const showInitiativeFieldHandler = () => {
        let inputElement = document.getElementById(`input for ${props.character.characterName}`)
        inputElement.style.visibility = "visible"
    }

    const initiativeValueHandler = (e) => {

        let cloneCharacterList = [...characterList]

        cloneCharacterList.forEach((character) => {

            if(character.characterName == props.character.characterName){
                character.initiative = e.target.value
            }

            character.activeTurn = false

        })

        cloneCharacterList.sort((characterA, characterB) =>  characterB.initiative - characterA.initiative)
        cloneCharacterList[0].activeTurn = true
        setCharacterList(cloneCharacterList)

    }

    const deleteCharacterHandler = () => {

        let cloneCharacterList = characterList.filter((character)=>{
            return character.characterName != props.character.characterName
        })

        setCharacterList(cloneCharacterList)
    }

    
    return (
        <div id={`card for ${props.character.characterName}`} className="character-card-container">
            {props.character.activeTurn && <TurnSelector />}
            <div style={props.character.activeTurn ? {color: "gold"} : { color: "blue" }}  className="character-card-name">
                {props.character.characterName}
            </div>
            <img className='avatar-image' src={props.character.avatarURL} />
            <div style={{display: "flex", justifyContent: "center"}} >
                <div>
                    {props.character.initiative}
                </div>
                <button
                    onClick={showInitiativeFieldHandler}
                >
                    Change Initiative
                </button>
                <input
                    className="initiative-input-field"
                    id={`input for ${props.character.characterName}`} 
                    placeholder="initiative value"
                    onChange={(e) => {initiativeValueHandler(e)}}
                    value={props.character.intiative}
                />
            </div>
            <button
                className="delete-character-button button"
                onClick={deleteCharacterHandler}
            >
                Delete Character
            </button>
        </div>
    )
}


export default CharacterCardContainer
