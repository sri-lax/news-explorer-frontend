import "./SavedArticles.css";
import deleteBtn from "../../assets/deleteBtn.svg";

function SavedArticles({ savedArticles, onDeleteArticle }) {
  const username = "Elise";

  return (
    <main className="saved-articles">
      <section className="saved-articles__header">
        <h1 className="saved-articles__title">Saved articles</h1>
        <p className="saved-articles__subtitle">Welcome, {username}</p>
        <h1 className="saved-articles__title">
          Elise, you have {savedArticles.length} saved articles
        </h1>
      </section>

      <ul className="saved-articles__list">
        {savedArticles.map((item) => (
          <li key={item._id} className="saved-articles__card">
            <div className="saved-articles__card-header">
              <span className="saved-articles__tag">{item.name}</span>
              <button
                className="saved-articles__delete-btn"
                onClick={() => onDeleteArticle(item)}
                aria-label="Delete article"
                title="Remove this article"
              >
                <img
                  src={deleteBtn}
                  alt="Delete icon"
                  className="delete__icon"
                />
              </button>
            </div>

            <div className="saved-articles__card-body">
              <img
                src={item.image}
                alt={`Image for ${item.title}`}
                className="saved-articles__delete-btn "
              />
              <div className="saved-articles__content">
                <p className="saved-articles__date">{item.date}</p>
                <h3 className="saved-articles__title">{item.title}</h3>
                <p className="saved-articles__excerpt">{item.info}</p>
                <p className="saved-articles__source">{item.source}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default SavedArticles;
