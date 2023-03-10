import api from "../../utils/api";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <section>
      <div className={styles.pet_home_header}>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um e conheça o tutor deles</p>
      </div>
      <div className={styles.pet_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.pet_card}>
              <div
                className={styles.pet_card_image}
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                }}
              ></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso: {pet.weight}</span>
              </p>
              {pet.available ? (
                <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.adopted_text}>Este pet já foi adotado!</p>
              )}
            </div>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou diponíveis para adoção no momento!</p>
        )}
      </div>
    </section>
  );
}

export default Home;
