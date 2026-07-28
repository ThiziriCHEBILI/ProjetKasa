import { useState } from "react";
import Arrow from "../../assets/arrow.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse__button">
        {title}
        <img
          src={Arrow}
          alt="Arrow"
          className={`collapse__arrow ${isOpen ? "collapse__arrow--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;