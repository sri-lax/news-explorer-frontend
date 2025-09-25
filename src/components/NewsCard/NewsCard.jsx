import "./NewsCard.css";
import { useState } from "react";

import SaveBtn from "../../assets/saveBtn.svg";
function NewsCard({ item, isSaved, onToggleSave, currentUser }) {
  const [showWarning, setShowWarning] = useState(false);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleSaveClick = () => {
    if (!currentUser) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    onToggleSave(item);
  };

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img
          src={item.image}
          alt={`Image for ${item.title}`}
          className="cards__img"
        />
        <div className="card__save-wrapper">
          {showWarning && !currentUser && (
            <span className="card__save-warning">Sign in to save articles</span>
          )}
          <button
            className={`card__save-btn ${
              isSaved ? "card__save-btn_saved" : ""
            }`}
            onClick={handleSaveClick}
            aria-label={isSaved ? "Unsave article" : "Save article"}
          >
            <img src={SaveBtn} alt="Save icon" className="card__save-icon" />
          </button>
        </div>
      </div>

      <div className="card__content">
        <p className="card__date">{currentDate}</p>
        <h3 className="card__title">{item.title}</h3>
        <p className="card__info">{item.info}</p>
        <p className="card__source"> {item.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
