import "./NewsCard.css";
function NewsCard({ item }) {
  return (
    <li className="card">
      <img
        src={item.image}
        alt={`Image for ${item.title}`}
        className="cards__img"
      />
      <div className="card__content">
        <p className="card__date">November 3, 2020</p>
        <h3 className="card__title">{item.title}</h3>
        <p className="card__info">{item.info}</p>
        <p className="card__source"> {item.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
