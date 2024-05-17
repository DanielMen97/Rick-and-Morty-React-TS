import { useContext } from "react"
import GlobalContext from "../context/globalContext"
import { GlobalDataI } from "../models/global"

const useGlobal = (): GlobalDataI => {

  const data = useContext(GlobalContext)

  return data
}

export default useGlobal
