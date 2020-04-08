import React from 'react'


const CharacterCardContainer = (props) => {
    
    //start here, create input change function to set intitiative

    return (
        <div>
            <input 
                placeholder="initiative value"
            />
            <img className='avatar-image' src={props.character.avatarURL} />
        </div>
    )
}


export default CharacterCardContainer
