import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures, alt }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex(imageIndex === pictures.length - 1 ? 0 : imageIndex + 1);
  };

  const previousImage = () => {
    setImageIndex(imageIndex === 0 ? pictures.length - 1 : imageIndex - 1);
  };

  return (
    <div className="slideshow">
      <img src={pictures[imageIndex]} alt={alt} className="slideshow__pictures" />
      {pictures.length > 1 && (
        <div className="slideshow__arrows">
          <i className="fa-solid fa-angle-left" onClick={previousImage}></i>
          <i className="fa-solid fa-angle-right" onClick={nextImage}></i>
          <div className="slideshow__index">
          {imageIndex + 1}/ {pictures.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
