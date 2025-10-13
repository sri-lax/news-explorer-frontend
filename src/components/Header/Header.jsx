import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import unionIcon from "../../assets/unionIcon.svg";
import dropDown from "../../assets/dropDown.svg";
import closeButton from "../../assets/closeButton.svg";
import Navigation from "../Navigation/Navigation";

function Header({
  handleAddClick,
  currentUser,
  onSignOut,
  isDropdownOpen,
  toggleDropdown,
  closeDropdown,
  showSavedHeader,
  onHomeClick,
  dropdownRef,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";
  const useSavedStyle = isSavedPage || showSavedHeader;

  return (
    <header className={`header ${isSavedPage ? "header_type_saved-news" : ""}`}>
      <div className="header__container">
        <h1 className="header__news-title">News Explorer</h1>

        <div className="header__dropdown-wrapper header__show-on-mobile">
          <button
            className="header__user-btn"
            onClick={toggleDropdown}
            aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
          >
            <img
              src={isDropdownOpen ? closeButton : dropDown}
              alt=""
              className="header__arrow-icon"
            />
          </button>
        </div>
      </div>

      <nav className="header__user-menu" aria-label="Primary navigation">
        {/* Desktop-only navigation */}
        <button
          className={`header__home-btn header__hide-on-mobile ${
            location.pathname === "/" ? "header__link_active" : ""
          }`}
          onClick={() => {
            onHomeClick();
            navigate("/");
          }}
        >
          Home
        </button>

        {currentUser && (
          <button
            className={`header__saved-btn header__hide-on-mobile ${
              location.pathname === "/saved-news" ? "header__link_active" : ""
            }`}
            onClick={() => navigate("/saved-news")}
          >
            Saved Articles
          </button>
        )}

        {!useSavedStyle && (
          <button
            onClick={handleAddClick}
            className="header__signin header__hide-on-mobile"
          >
            Sign in
          </button>
        )}

        {/* Desktop sign-out button */}
        {currentUser && useSavedStyle && (
          <button
            className="header__user-btn header__hide-on-mobile"
            onClick={onSignOut}
          >
            <span className="header__username">{currentUser.userName}</span>
            <img
              src={unionIcon}
              alt="Sign out icon"
              className="header__arrow-icon"
            />
          </button>
        )}

        {/* Mobile dropdown menu content */}
        {isDropdownOpen && (
          <div className="header__dropdown-overlay">
            <nav
              className="header__dropdown-menu header__show-on-mobile"
              ref={dropdownRef}
            >
              <Navigation
                currentUser={currentUser}
                onSignOut={onSignOut}
                onHomeClick={onHomeClick}
                handleAddClick={handleAddClick}
                closeDropdown={closeDropdown}
              />
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
