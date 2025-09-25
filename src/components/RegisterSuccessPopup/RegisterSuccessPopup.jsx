import "./RegisterSuccessPopup.css";

function RegisterSuccessPopup({ onSignInClick }) {
  return (
    <div className="popup">
      <p className="popup__message">Registration successfully completed!</p>
      <button className="popup__link" onClick={onSignInClick}>
        Sign in
      </button>
    </div>
  );
}

export default RegisterSuccessPopup;
