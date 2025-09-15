import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [articleData, setArticleData] = useState({ type: " " });
  const [activeModal, setActiveModal] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);

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
    <div className="page">
      <div className="page__content">
        <Header
          handleAddClick={handleAddClick}
          handleRegisterClick={handleRegisterClick}
        />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/home" element={<></>} />
        </Routes>
        <SearchForm onSearch={setArticleData} />
        <Main
          articleData={articleData}
          savedArticles={savedArticles}
          onSaveArticle={handleSaveArticle}
        />
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
