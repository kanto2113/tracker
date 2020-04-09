import React, { useContext, useState } from 'react';
import CharacterListContainer from './components/CharacterListContainer'
import NewCharacterContainer from './components/NewCharacterContainer'
import './App.css';

export const CharacterListContext = React.createContext()

const App = () => {
  

  const defaultCharacterArray = [{
    characterName: "Dyce",
    initiative: 0,
    activeTurn: false,
    avatarURL: "https://i.pinimg.com/originals/7e/85/17/7e8517acd27a3d13a18704708892afc9.png"
  },
  {
    characterName: "Elad",
    initiative: 0,
    activeTurn: true,
    avatarURL: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"
  }
  ]

  const [ characterList, setCharacterList ] = useState(defaultCharacterArray)


  return (

    <CharacterListContext.Provider value={[characterList, setCharacterList]}>
        <div>
          initiative-tracker-1.0
          <NewCharacterContainer characterList={characterList} setCharacterList={setCharacterList}/>
          <CharacterListContainer></CharacterListContainer>
        </div>
    </CharacterListContext.Provider>
  )

}



export default App;

//TODO CSS