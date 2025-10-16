import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query?.trim() || "");
  };

  return (
    <div className="search-container">
      <h1 className="search-title">What&apos;s going on in the world?</h1>
      <p className="search-subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Enter topic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
