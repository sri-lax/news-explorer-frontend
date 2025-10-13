import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  setActiveModal,
  modalRef,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, userName });
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setName("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      handleCloseClick={onClose}
      onSubmit={handleSubmit}
      modalRef={modalRef}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          placeholder="Enter email"
          className="modal__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          placeholder="Enter password"
          className="modal__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        UserName
        <input
          placeholder="Enter your username"
          type="text"
          className="modal__input"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <button
        type="submit"
        disabled={!email || !password || !userName}
        className="modal__submit"
      >
        Sign up
      </button>

      <button
        type="button"
        className="modal__link"
        onClick={() => {
          onClose();
          setActiveModal("header__signin");
        }}
      >
        <span className="signin__or">or</span> Sign in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
