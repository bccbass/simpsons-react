import React, { useState } from 'react'
import ShowQuote from './ShowQuote'
import GetCharacter from './getCharacter'

const App = () => {
  const [character, setCharacter] = useState('')
  return <> 
    <h1>Simpsons Quotes</h1>
    <GetCharacter setCharacter={setCharacter}/>
    <ShowQuote character={character}/>
  </>
}

export default App