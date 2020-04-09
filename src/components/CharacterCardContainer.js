import React, { useContext } from 'react'
import { CharacterListContext } from '../App'

const CharacterCardContainer = (props) => {
    
    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    console.log(characterList)

    const initiativeValueHandler = (e) => {

        let cloneCharacterList = [...characterList]

        cloneCharacterList.forEach((character) => {

            if(character.characterName == props.character.characterName){
                character.initiative = e.target.value
            }

        })

        cloneCharacterList.sort((characterA, characterB) =>  characterB.initiative - characterA.initiative)
        setCharacterList(cloneCharacterList)

    }
    
    return (
        <div className="character-card-container">
            <div style={props.character.activeTurn ? {color: "gold"} : { color: "blue" }}  className="character-card-name">
                {props.character.characterName}
            </div>
            <img className='avatar-image' src={props.character.avatarURL} />
            <div style={{display: "flex", justifyContent: "center"}} >
                <div>
                    {props.character.initiative}
                </div>
                <input 
                    placeholder="initiative value"
                    onChange={(e) => {initiativeValueHandler(e)}}
                    value={props.character.intiative}
                />
               
            </div>
        </div>
    )
}


export default CharacterCardContainer
