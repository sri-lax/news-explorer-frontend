import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "header__signin" && "modal_opened"}`}
    >
      <div className="modal__content modal__content_type_image">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img src={closeButton} alt="close" className="close__button" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
        <p className="modal__footer">
          <a href="/signup" className="modal__link">
            or Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
export default ModalWithForm;
