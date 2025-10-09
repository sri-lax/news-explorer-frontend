import { useState, useEffect } from "react";
import "./Main.css";

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
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className="main">
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
            <ul className="cards__list">
              {filteredArticles.slice(0, visibleCount).map((item) => {
                const isSaved = savedArticles.some(
                  (a) =>
                    a._id === item._id ||
                    a.id === item._id ||
                    a._id === item.id ||
                    a.id === item.id
                );

                return (
                  <NewsCard
                    key={`${item.userId}_${item._id || item.id}`}
                    item={item}
                    isSaved={isSaved}
                    onToggleSave={onToggleSaveArticle}
                    currentUser={currentUser}
                  />
                );
              })}
            </ul>

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
    </main>
  );
}

export default Main;
