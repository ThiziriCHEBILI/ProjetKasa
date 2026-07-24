import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";
import imagehome from "../../assets/image-home.png";
import "./Home.scss";

function Home() {
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
