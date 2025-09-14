import "./Header.css";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__news-title">News Explorer</h1>
      </div>
      <div className="header__user-menu">
        <button className="header__home-btn">Home</button>
        <button onClick={handleAddClick} className="header__signin">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;
