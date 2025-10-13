import { useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation({
  currentUser,
  onSignOut,
  onHomeClick,
  handleAddClick,
  closeDropdown,
}) {
  const navigate = useNavigate();

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      {currentUser ? (
        <>
          <button
            className="navigation__item"
            onClick={() => {
              closeDropdown?.();
              navigate("/");
              onHomeClick?.();
            }}
          >
            Home
          </button>
          <button
            className="navigation__item"
            onClick={() => {
              closeDropdown?.();
              navigate("/saved-news");
            }}
          >
            Saved Articles
          </button>
          <button
            type="button"
            className="navigation__item"
            onClick={() => {
              closeDropdown?.();
              onSignOut();
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="navigation__item"
            onClick={() => {
              closeDropdown?.();
              navigate("/");
              onHomeClick?.();
            }}
          >
            Home
          </button>
          <button
            type="button"
            className="navigation__item"
            onClick={() => {
              closeDropdown?.();
              handleAddClick();
            }}
          >
            Sign in
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;
