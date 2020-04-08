import React, { useState, useContext } from 'react'
import AvatarContainer from './AvatarContainer'
import { CharacterListContext } from  "../App"

const AvatarListContainer = () => {

    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    const [ avatarArray, setAvatarArray ] = useState([ 
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2ad9141-de52-4e8a-afd3-cdd3a9c0b0d7/d49puok-1b276986-05aa-43d7-bdbd-5595818c3464.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyYWQ5MTQxLWRlNTItNGU4YS1hZmQzLWNkZDNhOWMwYjBkN1wvZDQ5cHVvay0xYjI3Njk4Ni0wNWFhLTQzZDctYmRiZC01NTk1ODE4YzM0NjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qU_5lpZ0cF8pFcwe9FcZ3ZazbjmllVfFm4Hglq8UQlM', 
        'https://i.pinimg.com/originals/be/1b/a3/be1ba3364bf0b82e3a8acbb0d3322f87.jpg', 
        'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/371/420/618/636272706155064423.png' ])


    return (

        <div>
            {characterList.map((characterObject) => {

                return(
                   <AvatarContainer avatarURL={characterObject.avatarURL} />
                )

            })}
        </div>
    )
}


export default AvatarListContainer