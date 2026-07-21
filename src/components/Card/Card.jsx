function Card(props) {
  return (
    <article>
      <img src={props.cover} alt="Carte" />
      <p>{props.title}</p>
    </article>
  );
}
export default Card;
