import React, { useEffect, useContext, useRef, useState } from 'react'
import TurnSelector from './TurnSelector'
import { CharacterListContext } from '../App'

const CharacterCardContainer = (props) => {

    const inputRef = useRef(null)

    const [ newInitValue, setNewInitValue ] = useState(props.character.initiative)
    
    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    let initValueRef = useRef(null)
    initValueRef.current = newInitValue

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

        setNewInitValue(e.target.value)

    }

    const deleteCharacterHandler = () => {

        let cloneCharacterList = characterList.filter((character)=>{
            return character.characterName != props.character.characterName
        })

        setCharacterList(cloneCharacterList)
    }

    let backgroundImage = `linear-gradient(to bottom right, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .4) 35%, rgba(0, 0, 0, .7) 100%), url(${props.character.avatarURL})`

    let containerStyleObj =  props.character.activeTurn ? {backgroundImage: backgroundImage, border: "3px solid gold", margin: "45px 0px 20px 30px", boxShadow: "10px 10px 30px #10570A, 5px 5px 20px #10570A, -10px -10px 30px rgba(255, 255, 255, 0.25), -5px -5px 20px #FFFFFF"} : {backgroundImage: backgroundImage}

    const clickAwayListener = (e) => {

        const clickedElement = e.target
        if(inputRef.current){
            console.log(inputRef.current)
            if(clickedElement == inputRef.current){
                return;
            }           
            console.log("click outside")
            characterList.forEach((charObj) => {
                if(charObj.characterName == props.character.characterName){
                    console.log("new init", newInitValue)
                    console.log("ref init value", initValueRef)
                    charObj.initiative = initValueRef.current
                    console.log("found character", charObj)
                }
                
            })

            characterList.forEach((character)=>{
                character.activeTurn = false
            })
            characterList.sort((characterA, characterB) =>  characterB.initiative - characterA.initiative)
            characterList[0].activeTurn = true
            setCharacterList([...characterList])
        }

        window.removeEventListener("click", clickAwayListener)
    }

    

    const createListener = () => {
        window.addEventListener("click", clickAwayListener)
        console.log("i have focus")
    }
 
    return (
        <div style={containerStyleObj} id={`card for ${props.character.characterName}`} className="character-card-container">
            <div className="character-card-name">
                {props.character.characterName}
            </div>
            <div className="character-card-right-row">
                <button
                    className="delete-character-button button"
                    onClick={deleteCharacterHandler}
                >
                    X
                </button>
                {props.character.activeTurn && <TurnSelector />}
                <div className="initiative-container">
                    {props.character.initiative}
                </div>
            </div>

            <div className="character-card-bottom-row" >
                <div className="initiative-value">
                    {props.character.initiative}
                </div>
                <button
                    onClick={showInitiativeFieldHandler}
                >
                    Change Initiative
                </button>
                <input
                    className="initiative-value"
                    id={`input for ${props.character.characterName}`} 
                    placeholder="initiative value"
                    onChange={(e) => {initiativeValueHandler(e)}}
                    value={newInitValue}
                    onFocus={createListener}
                    ref={inputRef}
                />
            </div>
            
        </div>
    )
}


export default CharacterCardContainer
