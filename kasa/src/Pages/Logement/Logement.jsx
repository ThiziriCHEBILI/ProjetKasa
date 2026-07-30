import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <>
      {logement && (
        <>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt="photo de profil" />
          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${index < Number(logement.rating) ? "star--active" : "star--inactive"}`}
              ></i>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Logement;
