import { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
  loginUser,
  registerUser,
} from "../../utils/api";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessPopup from "../RegisterSuccessPopup/RegisterSuccessPopup";
import Navigation from "../Navigation/Navigation";
import SavedArticles from "../SavedArticles/SavedArticles";

function App() {
  const [articleData, setArticleData] = useState({ type: " " });
  const [activeModal, setActiveModal] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const showSavedHeader = !!currentUser;

  const isSavedPage = location.pathname === "/saved-news";

  useEffect(() => {
    getSavedArticles()
      .then((data) => {
        console.log("Hydrated articles:", data);
        setSavedArticles(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error("Failed to fetch saved articles:", err));
  }, []);

  const handleAddClick = () => setActiveModal("header__signin");
  const handleRegisterClick = () => setActiveModal("register");
  const closeActiveModal = () => setActiveModal("");

  const handleToggleSaveArticle = (article) => {
    if (!currentUser) {
      return;
    }

    const match = savedArticles.find((a) => a._id === article._id);

    if (match && match.id) {
      deleteArticle(match.id)
        .then(() => {
          setSavedArticles((prev) => prev.filter((a) => a.id !== match.id));
          console.log("Unsave successful:", match.title);
        })
        .catch((err) => console.error("Failed to unsave article:", err));
    } else {
      const enriched = {
        ...article,
        date: new Date().toLocaleDateString("default", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        source: "News Explorer",
      };

      saveArticle(enriched)
        .then((newArticle) => {
          setSavedArticles((prev) => [...prev, newArticle]);
          console.log("Save successful:", newArticle.title);
        })
        .catch((err) => console.error("Failed to save article:", err));
    }
  };
  const handleDeleteArticle = (article) => {
    if (!article || !article.id) {
      console.error("Invalid article passed to delete:", article);
      return;
    }

    deleteArticle(article.id)
      .then(() => {
        setSavedArticles((prev) => prev.filter((a) => a.id !== article.id));
      })
      .catch((err) => console.error("Failed to delete article:", err));
  };

  return (
    <div className={`page ${isSavedPage ? "page__no-bg" : ""}`}>
      <div className="page__content">
        <Header
          handleAddClick={handleAddClick}
          handleRegisterClick={handleRegisterClick}
          currentUser={currentUser}
          onSignOut={() => {
            setCurrentUser(null);
            localStorage.removeItem("currentUser");
            setShowSavedHeader(false);
            navigate("/");
          }}
          showSavedHeader={showSavedHeader}
        />
        <Navigation />
        {isLoaded && (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchForm onSearch={setArticleData} />
                  <Main
                    articleData={articleData}
                    savedArticles={savedArticles}
                    onToggleSaveArticle={handleToggleSaveArticle}
                    currentUser={currentUser}
                  />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedArticles
                  savedArticles={savedArticles}
                  isLoaded={isLoaded}
                  onDeleteArticle={handleDeleteArticle}
                  userName={currentUser?.userName}
                />
              }
            />
          </Routes>
        )}
      </div>
      <LoginModal
        isOpen={activeModal === "header__signin"}
        onClose={closeActiveModal}
        onLogin={(credentials) => {
          loginUser(credentials)
            .then((user) => {
              console.log("Logged in:", user);
              setCurrentUser(user);
              localStorage.setItem("currentUser", JSON.stringify(user));
              closeActiveModal();
            })
            .catch(() => alert("Login failed"));
        }}
        setActiveModal={setActiveModal}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onRegister={(data) => {
          registerUser(data)
            .then((user) => {
              console.log("Registered:", user);
              setCurrentUser(user);
              localStorage.setItem("currentUser", JSON.stringify(user));
              setShowRegisterSuccess(true);
              closeActiveModal();
            })
            .catch(() => alert("Registration failed"));
        }}
        setActiveModal={setActiveModal}
      />
      {showRegisterSuccess && (
        <RegisterSuccessPopup
          onSignInClick={() => {
            setShowRegisterSuccess(false);
            setActiveModal("header__signin");
          }}
        />
      )}
    </div>
  );
}
export default App;
