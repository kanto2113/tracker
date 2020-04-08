import React from 'react'

const AvatarContainer = (props) => {
    
    return (
        <div>
            <img className='avatar-image' src={props.avatarURL} />
        </div>
    )
}


export default AvatarContainer
