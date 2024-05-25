import { useEffect, useState } from "react";
import useGlobal from "./useGlobal";
import { CharactersDefault, CharactersI, eventI } from "../models/global";

const useHome = () => {

  const { characters } = useGlobal()

  const [showCharacters, setShowCharacters] = useState<CharactersI[]>([{...CharactersDefault}]);

  useEffect(() => {
    setShowCharacters(characters.results)
  },[characters])
  
  const handleInputChange = (e:eventI): void => {
    setShowCharacters(characters.results.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const handleSelectChange = (e:eventI): void => {
    const optionSelect: string = e.target.value
    if(optionSelect === "all"){
      setShowCharacters(characters.results)
    } else {
      setShowCharacters(characters.results.filter(item => item.status.toLowerCase() === optionSelect))
    }
  }

  return {
    showCharacters,
    handleInputChange,
    handleSelectChange
  }
}

export default useHome
