import React, {useState, useEffect} from 'react'

const fetchQuote = (name, setter) => {
      fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${name}`) 
        .then(res => res.json())
        .then(data => setter(data[0]))
        // Why does the setter throw an error?
        .catch(err => console.error(err))
    }

const ShowQuote = ({character}) => {
    const [quote, setQuote] = useState()
    useEffect(() => fetchQuote(character, setQuote), [])
  return <>
  <button onClick={() => fetchQuote(character, setQuote)}>Click for a Quote!</button>

  { quote ? <div>
        <h2>{`"${quote.quote}"`}</h2>
        <h3>{`- ${quote.character}`}</h3>
        <img src={quote.image} alt="" height="280vh"/>
    </div> :
    <h2>Loading...</h2>
  }  
  </>
}


export default ShowQuote