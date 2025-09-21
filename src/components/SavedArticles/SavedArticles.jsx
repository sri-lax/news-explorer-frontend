import deleteBtn from "../../assets/deleteBtn.svg";

import "./SavedArticles.css";
function SavedArticles({
  savedArticles,
  isLoaded,
  onDeleteArticle,
  userName = "Guest",
}) {
  if (!isLoaded) {
    return <p>Loading saved articles...</p>;
  }

  const username = "Elise";

  console.log("Rendering savedArticles:", savedArticles);

  return (
    <main className="saved-articles">
      <section className="saved-articles__header">
        <h1 className="saved-articles__title">Saved articles</h1>
        <p className="saved-articles__subtitle">Welcome, {userName}</p>
        <h2 className="saved-articles__count">
          {userName}, you have {savedArticles.length} saved articles
        </h2>
      </section>

      {savedArticles.length === 0 ? (
        <p className="saved-articles__empty">No saved articles yet.</p>
      ) : (
        <ul className="saved-articles__list">
          {savedArticles.map((item) => (
            <li key={item.id} className="saved-articles__card">
              <div className="saved-articles__card-header">
                <button
                  className="saved-articles__delete-btn"
                  onClick={() => onDeleteArticle(item)}
                >
                  <img src={deleteBtn} alt="Delete" className="delete__icon" />
                </button>
              </div>

              <img
                src={item.image}
                alt={`Image for ${item.title}`}
                className="saved-articles__image"
              />

              <div className="saved-articles__content">
                <p className="saved-articles__date">
                  {item.date || "Unknown date"}
                </p>
                <h3 className="saved-articles__title">{item.title}</h3>
                <p className="saved-articles__excerpt">{item.info}</p>
                <p className="saved-articles__source">
                  {item.source || "Unknown source"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default SavedArticles;
