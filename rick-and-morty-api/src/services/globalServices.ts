import { RequestDataI } from "../models/global"

export const getAllCharacters = (): Promise<RequestDataI> => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
}
