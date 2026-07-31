import { useState } from "react";

function Slideshow({ pictures, alt }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex(imageIndex === pictures.length - 1 ? 0 : imageIndex + 1);
  };

  const previousImage = () => {
    setImageIndex(imageIndex === 0 ? pictures.length - 1 : imageIndex - 1);
  };

  return (
    <div>
      <img src={pictures[imageIndex]} alt={alt} />
      {pictures.length > 1 && (
        <div>
          <i className="fa-solid fa-angle-left" onClick={previousImage}></i>
          <i className="fa-solid fa-angle-right" onClick={nextImage}></i>
          {imageIndex + 1}/ {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
