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

  const handleAddClick = () => setActiveModal("header__signin");
  const handleRegisterClick = () => setActiveModal("register");
  const closeActiveModal = () => setActiveModal("");

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleAddClick={handleAddClick}
          handleRegisterClick={handleRegisterClick}
        />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/" element={<></>} />
        </Routes>
        <SearchForm onSearch={setArticleData} />
        <Main articleData={articleData} />
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
