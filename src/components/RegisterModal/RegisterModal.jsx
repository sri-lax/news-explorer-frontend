import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, setActiveModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, username });
    onClose();
  };

  // Optional: Reset form fields when modal closes
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
    >
      <label className="modal__label">
        Email
        <input
          type="email"
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
          className="modal__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          value={username}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <button type="submit" className="modal__submit">
        Sign in
      </button>

      <button
        type="button"
        className="modal__link"
        onClick={() => {
          onClose();
          setActiveModal("header__signin");
        }}
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
