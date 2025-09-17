import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ handleAddClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedPage ? "header_type_saved-news" : ""}`}>
      <div className="header__title">
        <h1 className="header__news-title">News Explorer</h1>
      </div>

      <div className="header__user-menu">
        <button className="header__home-btn" onClick={() => navigate("/")}>
          Home
        </button>
        {isSavedPage && (
          <button className="header__saved-btn">Saved Articles</button>
        )}

        {!isSavedPage && (
          <button onClick={handleAddClick} className="header__signin">
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
