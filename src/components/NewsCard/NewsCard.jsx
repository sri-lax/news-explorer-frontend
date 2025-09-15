import "./NewsCard.css";
import SaveBtn from "../../assets/saveBtn.svg";
function NewsCard({ item, isSaved, onSave }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <li className="card">
      <img
        src={item.image}
        alt={`Image for ${item.title}`}
        className="cards__img"
      />
      <button
        className={`card__save-btn ${isSaved ? "card__save-btn_saved" : ""}`}
        onClick={() => onSave(item)}
        aria-label={isSaved ? "Unsave article" : "Save article"}
        title={isSaved ? "Remove from saved articles" : "Save this article"}
      >
        <img src={SaveBtn} alt="Save icon" className="card__save-icon" />
        {isSaved ? "Saved" : ""}
      </button>

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
