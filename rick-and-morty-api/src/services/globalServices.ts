export const getAllCharacters = () => {
  const getCharacters = fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => data)
    return getCharacters
}
