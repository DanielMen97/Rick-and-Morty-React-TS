import { ReactNode, createContext, useEffect, useState } from "react";
import { GlobalDataDefault, GlobalDataI, requestDataDefault, RequestDataI } from "../models/global";
import { getAllCharacters } from "../services/globalServices";

const GlobalContext = createContext<GlobalDataI>({...GlobalDataDefault});

export function GlobalContextProvider({children}:{children: ReactNode}) {

  const [ characters, setCharacters] = useState<RequestDataI>({...requestDataDefault})

  useEffect(() => {
    getAllCharacters()
      .then(data => setCharacters(data))
  }, [])

  const value: GlobalDataI = {
    characters
  }
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext