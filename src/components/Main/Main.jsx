import { useState } from "react";
import "./Main.css";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
<button className="news__show-more">Show more</button>;
import { defaultArticles } from "../../utils/constants.js";

function Main({
  articleData,
  savedArticles,
  onToggleSaveArticle,
  currentUser,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredArticles =
    articleData.type.trim() === ""
      ? []
      : defaultArticles.filter(
          (item) => item.name.toLowerCase() === articleData.type.toLowerCase()
        );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className="main">
      <section className="cards">
        {filteredArticles.length > 0 && (
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
                console.log("Rendering card:", item._id, "Saved:", isSaved);

                return (
                  <NewsCard
                    key={item._id}
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
      <section className="author">
        <About />
      </section>
    </main>
  );
}

export default Main;
