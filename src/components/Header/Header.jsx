import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import unionIcon from "../../assets/unionIcon.svg";

function Header({ handleAddClick, currentUser, onSignOut, showSavedHeader }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  const useSavedStyle = isSavedPage || showSavedHeader;

  return (
    <header className={`header ${isSavedPage ? "header_type_saved-news" : ""}`}>
      <div className="header__title">
        <h1 className="header__news-title">News Explorer</h1>
      </div>

      <div className="header__user-menu">
        <button className="header__home-btn" onClick={() => navigate("/")}>
          Home
        </button>
        {currentUser && (
          <button
            className="header__saved-btn"
            onClick={() => navigate("/saved-news")}
          >
            Saved Articles
          </button>
        )}
        {currentUser && useSavedStyle && (
          <button className="header__user-btn" onClick={onSignOut}>
            <span className="header__username">{currentUser.userName}</span>
            <img
              src={unionIcon}
              alt="Dropdown arrow"
              className="header__arrow-icon"
            />
          </button>
        )}
        {!useSavedStyle && (
          <button onClick={handleAddClick} className="header__signin">
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
