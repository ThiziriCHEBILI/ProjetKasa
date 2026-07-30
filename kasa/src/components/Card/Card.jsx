import "./Card.scss";
function Card(props) {
  return (
    
    <article className="card"> 
      <img src={props.cover} alt="Carte" className="card__img" />
      <h2 className="card__title">{props.title}</h2>
    </article>
    
  );
}
export default Card;
