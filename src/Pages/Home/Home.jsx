import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";
import imagehome from "../../assets/image-home.png";
function Home() {
  return (
    <div className="container">
      <Banner image={imagehome} texte="Chez vous, partout et ailleurs" />
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Card title={logement.title} cover={logement.cover} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
