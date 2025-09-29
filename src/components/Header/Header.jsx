import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import unionIcon from "../../assets/unionIcon.svg";
import dropDown from "../../assets/dropDown.svg";
import closeButton from "../../assets/closeButton.svg";

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

        {!isDropdownOpen && (
          <div
            className={`header__dropdown-wrapper header__show-on-mobile ${
              isDropdownOpen ? "hidden" : ""
            }`}
          >
            <button className="header__user-btn" onClick={toggleDropdown}>
              <img
                src={dropDown}
                alt="Open menu"
                className="header__arrow-icon"
              />
            </button>
          </div>
        )}
      </div>

      <div className="header__user-menu">
        {/* Desktop-only navigation */}
        <button
          className="header__home-btn header__hide-on-mobile "
          onClick={() => {
            onHomeClick();
            navigate("/");
          }}
        >
          Home
        </button>

        {currentUser && (
          <button
            className="header__saved-btn header__hide-on-mobile"
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
            <div
              className="header__dropdown-menu header__show-on-mobile"
              ref={dropdownRef}
            >
              {currentUser ? (
                <>
                  <button
                    className="header__dropdown-item"
                    onClick={() => {
                      closeDropdown();
                      navigate("/saved-news");
                    }}
                  >
                    Saved Articles
                  </button>
                  <button className="header__dropdown-item" onClick={onSignOut}>
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="header__dropdown-item header__dropdown-homeBtn"
                    onClick={() => {
                      closeDropdown();
                      navigate("/");
                    }}
                  >
                    Home
                  </button>
                  <button
                    className="header__dropdown-item header__signin-dropDown"
                    onClick={() => {
                      closeDropdown();
                      handleAddClick();
                    }}
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
