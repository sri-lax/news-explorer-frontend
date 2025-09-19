import "./NewsCard.css";
import SaveBtn from "../../assets/saveBtn.svg";
function NewsCard({ item, isSaved, onToggleSave }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img
          src={item.image}
          alt={`Image for ${item.title}`}
          className="cards__img"
        />
        <button
          className={`card__save-btn ${isSaved ? "card__save-btn_saved" : ""}`}
          onClick={() => {
            console.log("Toggle save clicked:", item);
            onToggleSave(item);
          }}
        >
          <img src={SaveBtn} alt="Save icon" className="card__save-icon" />
        </button>
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
