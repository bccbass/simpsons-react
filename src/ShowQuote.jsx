import React, {useState, useEffect} from 'react'

const ShowQuote = ({character}) => {
  console.log(character)
    const [quote, setQuote] = useState()
    useEffect(() => {
      fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${character}`) 
        .then(res => res.json())
        .then(data => setQuote(data[0]))
    },[character])

  return <>

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