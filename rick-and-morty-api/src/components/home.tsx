import useHome from "../hooks/useHome";

const Home = () => {
  
  const { showCharacters, handleInputChange, handleSelectChange } = useHome();

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <input onChange={handleInputChange} />
      <select onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="alive">Alive</option>
        <option value="unknown">Unknown</option>
        <option value="dead">Dead</option>
      </select>
      {showCharacters.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} />
            <p>{item.gender}</p>
            <p>{item.species}</p>
            <p>{item.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
