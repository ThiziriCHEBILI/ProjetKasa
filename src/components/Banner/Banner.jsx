function Banner(props) {
  return (
    <div>
      <img src={props.image} alt="Bannière" />

      <p>{props.texte}</p>
    </div>
  );
}

export default Banner;
