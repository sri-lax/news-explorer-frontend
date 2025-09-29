import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
  loginUser,
  registerUser,
} from "../../utils/NewsExplorerApi";
import { defaultArticles } from "../../utils/constants";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessPopup from "../RegisterSuccessPopup/RegisterSuccessPopup";
import Navigation from "../Navigation/Navigation";
import SavedArticles from "../SavedArticles/SavedArticles";
import Footer from "../Footer/Footer";

function App() {
  const [articleData, setArticleData] = useState({ type: " " });
  const [activeModal, setActiveModal] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHomeClick = () => {
    setArticleData({ type: " " });
    setFilteredArticles([]);
    setIsSearching(false);
    setSearchError(null);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const modalRef = useRef();
  const dropdownRef = useRef();
  const showSavedHeader = !!currentUser;

  const isSavedPage = location.pathname === "/saved-news";

  useEffect(() => {
    setSearchError(null);

    if (articleData.type.trim() !== "") {
      setIsSearching(true);

      setTimeout(() => {
        try {
          const filtered = defaultArticles.filter(
            (item) => item.name.toLowerCase() === articleData.type.toLowerCase()
          );

          setFilteredArticles(filtered);
          setIsSearching(false);
        } catch (err) {
          setSearchError(
            "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
          );
          setIsSearching(false);
        }
      }, 1000); // simulate delay
    } else {
      setFilteredArticles([]);
    }
  }, [articleData]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setActiveModal("");
        setShowRegisterSuccess(false);
      }
    }

    if (activeModal || showRegisterSuccess) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal, showRegisterSuccess]);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        (activeModal || showRegisterSuccess)
      ) {
        setActiveModal("");
        setShowRegisterSuccess(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeModal, showRegisterSuccess]);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    getSavedArticles()
      .then((data) => {
        if (currentUser) {
          const userSaved = data.filter((a) => a.userId === currentUser.id);
          setSavedArticles(userSaved);
        } else {
          setSavedArticles([]);
        }
        setIsLoaded(true);
      })
      .catch((err) => console.error("Failed to fetch saved articles:", err));
  }, [currentUser]);

  useEffect(() => {
    function handleOutsideDropdownClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideDropdownClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideDropdownClick);
    };
  }, [isDropdownOpen]);

  const handleAddClick = () => setActiveModal("header__signin");
  const handleRegisterClick = () => setActiveModal("register");
  const closeActiveModal = () => setActiveModal("");
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setSavedArticles([]);
    setShowRegisterSuccess(false);
    navigate("/");
  };

  const handleToggleSaveArticle = (article) => {
    if (!currentUser) {
      return;
    }
    const normalizedId = article._id || article.id;

    const match = savedArticles.find(
      (a) => a.id === `${currentUser.id}_${normalizedId}`
    );

    if (match && match.id) {
      deleteArticle(match.id)
        .then(() => {
          setSavedArticles((prev) => prev.filter((a) => a.id !== match.id));
          console.log("Unsave successful:", match.title);
        })
        .catch((err) => console.error("Failed to unsave article:", err));
      return;
    }
    if (match) return;

    const enriched = {
      ...article,
      id: `${currentUser.id}_${normalizedId}`,
      userId: currentUser.id,
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
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          closeDropdown={closeDropdown}
          currentUser={currentUser}
          onSignOut={handleLogout}
          showSavedHeader={showSavedHeader}
          onHomeClick={handleHomeClick}
          dropdownRef={dropdownRef}
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
                    filteredArticles={filteredArticles}
                    isSearching={isSearching}
                    searchError={searchError}
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
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "header__signin"}
        onClose={closeActiveModal}
        modalRef={modalRef}
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
        modalRef={modalRef}
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
