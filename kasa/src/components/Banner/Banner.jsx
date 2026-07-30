import "./Banner.scss";
function Banner(props) {
  return (
    <div className="banner">
      <img src={props.image} alt="Bannière" className="banner__img" />

      <h1 className="banner__title"> {props.texte} </h1>
    </div>
  );
}

export default Banner;
