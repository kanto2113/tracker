import React, { useState, useContext } from 'react'
import CharacterCardContainer from './CharacterCardContainer'
import { CharacterListContext } from  "../App"


const CharacterListContainer = () => {


    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    return (
        <div className="character-list-container">
            {characterList.map((character) => {
                return(
                   <CharacterCardContainer key={character.characterName} character={character} />
                )
            })}
        </div>
    )
}


export default CharacterListContainer