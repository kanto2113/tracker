import React, { useContext, useState } from 'react';
import AvatarListContainer from './components/CharacterListContainer'
import NewCharacterContainer from './components/NewCharacterContainer'
import './App.css';

export const CharacterListContext = React.createContext()

const App = () => {
  
  const [ characterList, setCharacterList ] = useState([])

  console.log(characterList)

  return (

    <CharacterListContext.Provider value={[characterList, setCharacterList]}>
        <div>
          initiative-tracker-1.0
          <NewCharacterContainer characterList={characterList} setCharacterList={setCharacterList}/>
          <AvatarListContainer></AvatarListContainer>
        </div>
    </CharacterListContext.Provider>
  )

}



export default App;

/*

 
    characterName: 'Dyce',
    initiative: 0,
    avatarURL: 'https://i.pinimg.com/originals/be/1b/a3/be1ba3364bf0b82e3a8acbb0d3322f87.jpg',
    activeTurn: true,


1. in order for a function to access a variable, it is either passed it as a parameter or accessable via scope
2. ES6 - let cloneCharacter = new Object(newCharacter)
*/