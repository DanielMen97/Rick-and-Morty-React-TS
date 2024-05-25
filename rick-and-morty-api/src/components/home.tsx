import useHome from "../hooks/useHome";
import styles from './styles.module.scss';

const Home = () => {

  const { showCharacters, handleInputChange, handleSelectChange } = useHome();

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Characters Rick and Morty</h1>
        <nav className={styles.filters}>
          <input className={styles.input} onChange={handleInputChange} placeholder="Name..."/>
          <select className={styles.select} onChange={handleSelectChange}>
            <option className={styles.option} value="all">All</option>
            <option className={styles.option} value="alive">Alive</option>
            <option className={styles.option} value="unknown">Unknown</option>
            <option className={styles.option} value="dead">Dead</option>
          </select>
            <i className="fas fa-chevron-down" />
        </nav>
      </header>
      <main className={styles.content}> 
      {showCharacters.map((item) => {
        return (
          <section className={styles.characterCard} key={item.id}>
            <h2 className={styles.name}>{item.name}</h2>
            <img className={styles.image} src={item.image} />
            <p className={styles.info}>{item.gender}</p>
            <p className={styles.info}>{item.species}</p>
            <p className={styles.info}>{item.status}</p>
          </section>
        );
      })}
      </main>
    </div>
  );
};

export default Home;
