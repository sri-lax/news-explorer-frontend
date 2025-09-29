import "./LoginModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin, modalRef, setActiveModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // ✅ Real-time email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  // ✅ Final validation on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }

    setEmailError("");
    onLogin({ email, password });
    handleClose(); // Clear form and close
  };

  // ✅ Clear form on close
  const handleClose = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    onClose();
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      handleCloseClick={handleClose}
      onSubmit={handleSubmit}
      modalRef={modalRef}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className={`modal__input ${emailError ? "modal__input-error" : ""}`}
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <span className="modal__error">{emailError}</span>}
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

      <button
        type="submit"
        className="modal__submit"
        disabled={!email || !password}
      >
        Sign in
      </button>

      <button
        type="button"
        className="modal__link"
        onClick={() => {
          handleClose();
          setActiveModal("register");
        }}
      >
        <span className="modal__signup">or</span> Sign up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
