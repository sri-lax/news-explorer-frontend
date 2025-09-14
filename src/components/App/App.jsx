import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [articleData, setArticleData] = useState({ type: " " });
  const [activeModal, setActiveModal] = useState("");

  const handleAddClick = () => setActiveModal("header__signin");

  const closeActiveModal = () => setActiveModal("");

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <SearchForm onSearch={setArticleData} />
        <Main articleData={articleData} />
      </div>
      <ModalWithForm
        buttonText="sign in"
        title="Sign in"
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      >
        <label className="modal__label">
          Email
          <input type="email" className="modal__input" required />
        </label>
        <label className="modal__label">
          Password
          <input type="password" className="modal__input" required />
        </label>
      </ModalWithForm>
    </div>
  );
}
export default App;
