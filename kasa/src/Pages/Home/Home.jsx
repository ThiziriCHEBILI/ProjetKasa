import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import imagehome from "../../assets/image-home.png";
import "./Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
  fetch("http://localhost:8080/api/properties")
    .then((response) => response.json())
    .then((data) => setLogements(data))
    .catch((error) => {
      console.error("Erreur lors de la récupération des logements :", error);
    });
}, []);
  
  return (
    <div className="container">
      <Banner image={imagehome} texte="Chez vous, partout et ailleurs" />
      <section className="card-container">
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Card title={logement.title} cover={logement.cover} />
        </Link>
      ))}
      </section>
    </div>
  );
}

export default Home;
