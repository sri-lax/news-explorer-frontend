import { useState } from "react";
import "./Main.css";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import sadFaceIcon from "../../assets/sadFaceIcon.svg";

function Main({
  searchQuery,
  savedArticles,
  onToggleSaveArticle,
  currentUser,
  filteredArticles,
  isSearching,
  searchError,
  showAbout,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className="main">
      <div className="main__content-with-bg">
        <section className="cards">
          {isSearching && <Preloader />}

          {!isSearching && searchError && (
            <p className="cards__error">{searchError}</p>
          )}

          {!isSearching &&
            !searchError &&
            filteredArticles.length === 0 &&
            searchQuery?.trim() !== "" && (
              <>
                <h2 className="cards__empty">
                  <img
                    src={sadFaceIcon}
                    alt="Nothing found"
                    className="cards__icon"
                  />
                  Nothing found
                </h2>
                <p className="cards__empty-text" role="alert">
                  Sorry, but nothing matched your search terms. Please try again
                  with different keywords.
                </p>
              </>
            )}

          {!isSearching && !searchError && filteredArticles.length > 0 && (
            <>
              <h2 className="cards__title">Search results</h2>
              <section className="cards__list" role="list">
                {filteredArticles.slice(0, visibleCount).map((item) => {
                  const isSaved = savedArticles.some(
                    (a) =>
                      a._id === item._id ||
                      a.id === item._id ||
                      a._id === item.id ||
                      a.id === item.id
                  );

                  return (
                    <article
                      key={`${item.userId}_${item._id || item.id}`}
                      className="cards__item"
                      role="listitem"
                      aria-label={`Search result: ${item.title}`}
                    >
                      <NewsCard
                        item={item}
                        isSaved={isSaved}
                        onToggleSave={onToggleSaveArticle}
                        currentUser={currentUser}
                      />
                    </article>
                  );
                })}
              </section>

              {visibleCount < filteredArticles.length && (
                <div className="show-more-wrapper">
                  <button className="cards__show-more" onClick={handleShowMore}>
                    Show more
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {showAbout && (
        <section className="main__about-wrapper">
          <About />
        </section>
      )}
    </main>
  );
}

export default Main;
