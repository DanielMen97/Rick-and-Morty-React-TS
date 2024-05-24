import { useState } from "react"
import useGlobal from "../hooks/useGlobal"
import { CharactersDefault, CharactersI, eventI } from '../models/global'

const Home = () => {

  const { characters } = useGlobal()

  const [showCharacters, setShowCharacters] = useState<CharactersI[]>([{...CharactersDefault}]);
  
  const handleInputChange = (e:eventI): void => {
    setShowCharacters(characters.results.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  
  return (
    <div>
      <input onChange={handleInputChange}/> 
      {
        showCharacters.map((item) => {
          return(
            <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.image}/>
            </div>
          )
        } 
        )
      }
      
    </div>
  )
}

export default Home
