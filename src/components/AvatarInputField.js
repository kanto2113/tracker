import React from 'react'

const AvatarInputField = (props) => {
    
    const handleCharacterNameChange = (e) => {
        let newCharacterList = Array.from(props.characterList)    
        newCharacterList[0].characterName = e.currentTarget.value
        props.setCharacterList(newCharacterList)
    }

    return (
        <div>
            <input 
                onChange={(e)=>{
                    handleCharacterNameChange(e)
                }}
                value = {props.characterList[0].characterName}
            />

            <button>
                Add URL        
            </button>
        </div>
    )
}

export default AvatarInputField