import deleteBtn from "../../assets/deleteBtn.svg";

import "./SavedArticles.css";
function SavedArticles({ savedArticles, isLoaded, onDeleteArticle, userName }) {
  if (!isLoaded) {
    return <p>Loading saved articles...</p>;
  }

  console.log("Rendering savedArticles:", savedArticles);

  const uniquePlaces = [
    ...new Set(savedArticles.map((item) => item.place).filter(Boolean)),
  ];
  const displayedPlaces = uniquePlaces.slice(0, 2);
  const remainingCount = uniquePlaces.length - displayedPlaces.length;

  return (
    <main className="saved-articles">
      <section className="saved-articles__header">
        <h1 className="saved-articles__title">Saved articles</h1>
        <h2 className="saved-articles__count">
          {userName}, you have {savedArticles.length} saved articles
        </h2>
        {uniquePlaces.length > 0 && (
          <p className="saved-articles__keywords">
            By keywords:{" "}
            <span className="saved-articles__keywords-bold">
              {displayedPlaces.join(", ")}
              {remainingCount > 0 && ` and ${remainingCount} other`}
            </span>
          </p>
        )}
      </section>

      {savedArticles.length === 0 ? (
        <p className="saved-articles__empty">No saved articles yet.</p>
      ) : (
        <section className="saved-articles__list">
          {savedArticles.map((item) => (
            <article
              key={item.id}
              className="saved-articles__card"
              aria-label={`Saved article: ${item.title}`}
            >
              <p className="saved-articles__tag">
                {item.place || "Unknown place"}
              </p>

              <div className="saved-articles__card-header">
                <button
                  className="saved-articles__delete-btn"
                  onClick={() => onDeleteArticle(item)}
                  aria-label="Remove from saved"
                >
                  <img
                    src={deleteBtn}
                    alt="Delete"
                    className="saved-articles__delete-icon"
                  />
                  <span
                    className="saved-articles__delete-tooltip
"
                  >
                    Remove from saved
                  </span>
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
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default SavedArticles;
