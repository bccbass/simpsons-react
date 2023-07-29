import React from 'react'


const characters = ['Homer', 'Moe', 'Bart',  'Lisa', 'Marge', 'Dr. Nick', 'Duffman', 'Chief Wiggum', 'Ralph Wiggum', 'Apu', 'Principal Skinner', 'Milhouse', 'Comic Book Guy', 'Otto', 'Mayor Quimby', 'Rainier Wolfcastle']

const GetCharacter = ({setCharacter}) => {
  return <>
    <label id="charactersLabel" htmlFor="characters">Choose a Character </label><select name="characters" id="characters" style={{fontFamily: 'Homer Simpson Revised'}} onChange={e => setCharacter(e.target.value)}>
    <option id="random"value="">Random</option>
        { characters.map(character => <option id={character}value={character}>{character}</option>)}                  
    </select>

  
  </>
}
export default GetCharacter