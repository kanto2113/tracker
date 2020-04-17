import React, { useState } from 'react';
import CharacterListContainer from './components/CharacterListContainer'
import NewCharacterContainer from './components/NewCharacterContainer'
import XPTracker from './components/XPTracker'
import './App.css';

export const CharacterListContext = React.createContext()

const defaultCharacterArray = [{
  characterName: "Dyce",
  initiative: 0,
  activeTurn: true,
  avatarURL: "https://lh3.googleusercontent.com/proxy/Li4vRZM13iqjgQ5D5D4yvWTgfXwOHa03VsXCI2lq6yE-793IwmgwQk6m3nl5z6a86X3C1xX5RH6leh0OWTMFG6QkiZ8KqwLmYK7lEmOKmOiHvNdg-GVSF2-5PtBh"
},
{
  characterName: "Elad",
  initiative: 0,
  activeTurn: false,
  avatarURL: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"
},
{
  characterName: "Vashti",
  initiative: 0,
  activeTurn: false,
  avatarURL: "https://i.redd.it/7j8sck3bw6d21.jpg"
},
{
  characterName: "Durin",
  initiative: 0,
  activeTurn: false,
  avatarURL: "https://p1.hiclipart.com/preview/349/53/139/elf-dungeons-dragons-high-elf-ranger-d20-system-fantasy-warrior-roleplaying-game-png-clipart.jpg"
},{
  characterName: "Toby Probst",
  initiative: 0,
  activeTurn: false,
  avatarURL: "https://i.redd.it/ug8ongxomi731.jpg"
},
]

const App = () => {
  

  const [ characterList, setCharacterList ] = useState(defaultCharacterArray)


  return (

    <CharacterListContext.Provider value={[characterList, setCharacterList]}>
        <div className="app-container">
          initiative-tracker-1.0
          <NewCharacterContainer characterList={characterList} setCharacterList={setCharacterList}/>
          <XPTracker />
          <CharacterListContainer></CharacterListContainer>
        </div>
    </CharacterListContext.Provider>
  )

}



export default App;

//TODO CSS