import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Navigation from "../Navigation/Navigation";
import SavedArticles from "../SavedArticles/SavedArticles";
function App() {
  const [articleData, setArticleData] = useState({ type: " " });
  const [activeModal, setActiveModal] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  const handleAddClick = () => setActiveModal("header__signin");
  const handleRegisterClick = () => setActiveModal("register");
  const closeActiveModal = () => setActiveModal("");
  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => {
      const alreadySaved = prev.find((a) => a._id === article._id);
      return alreadySaved
        ? prev.filter((a) => a._id !== article._id) // Unsave
        : [...prev, article]; // Save
    });
  };

  return (
    <div className={`page ${isSavedPage ? "page__no-bg" : ""}`}>
      <div className="page__content">
        <Header
          handleAddClick={handleAddClick}
          handleRegisterClick={handleRegisterClick}
        />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchForm onSearch={setArticleData} />
                <Main
                  articleData={articleData}
                  savedArticles={savedArticles}
                  onSaveArticle={handleSaveArticle}
                />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedArticles
                savedArticles={savedArticles}
                onSaveArticle={handleSaveArticle}
              />
            }
          />
        </Routes>
      </div>
      <LoginModal
        isOpen={activeModal === "header__signin"}
        onClose={closeActiveModal}
        onLogin={(credentials) => {
          console.log("Logging in with:", credentials);
        }}
        setActiveModal={setActiveModal}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onRegister={(data) => {
          console.log("Registering user:", data);
        }}
      />
    </div>
  );
}
export default App;
