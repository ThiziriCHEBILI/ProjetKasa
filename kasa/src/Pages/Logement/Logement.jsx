import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./Logement.scss";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setLogement(data);
        } else {
          navigate("/404");
        }
      });
  }, []);

  return (
    <div className="logement__container container">
      {logement && (
        <>
          <Slideshow pictures={logement.pictures} alt={logement.title} />
          <div className="logement__bloc">
            <div className="logement__info">
              <h1 className="logement__info__name">{logement.title}</h1>
              <p className="logement__info__location">{logement.location}</p>
              <ul className="logement__info__tags">
                {logement.tags.map((tag, index) => (
                  <li key={index} className="logement__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="logement__host">
              <div className="logement__host__profile">
                <h2 className="logement__host__name">{logement.host.name}</h2>
                <img
                  src={logement.host.picture}
                  alt="photo de profil"
                  className="logement__host__picture"
                />
              </div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star ${index < Number(logement.rating) ? "star--active" : "star--inactive"}`}
                  ></i>
                ))}
              </div>
            </div>
          </div>
          <div className="logement__collapse">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
          </div>
        </>
      )}
    </div>
  );
}

export default Logement;
