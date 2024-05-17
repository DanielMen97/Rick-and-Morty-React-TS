import useGlobal from "../hooks/useGlobal"

interface eventI {
  target: {
    value: string
  }
}

const Home = () => {

  const { characters } = useGlobal()  

  const copyCharacters = characters

  const handleSearch = (e:eventI): void => {
   console.log(e.target.value)
  }
  return (
    <div>
      <input onChange={handleSearch}/> 
      {
        copyCharacters.results.map((item) => {
          const colorNombre = item.name === "Rick Sanchez" ? "green" : ""
          return(
            <div key={item.id}>
            <p style={{color: colorNombre}}>{item.name}</p>
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
