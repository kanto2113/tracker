import React, { useState, useContext } from 'react'
import CharacterCardContainer from './CharacterCardContainer'
import { CharacterListContext } from  "../App"


const CharacterListContainer = () => {


    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    return (

        <div>
            {characterList.map((character) => {
                return(
                   <CharacterCardContainer character={character} />
                )
            })}
        </div>
        
    )
}


export default CharacterListContainer