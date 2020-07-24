import React from "react";
//import PropTypes from "prop-types";
import styles from "./modal.module.css";

function Modal({ closeModal, form }) {
  const handleKeyDown = code => {
    if (code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClick = (target, currentTarget) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={styles.modal}
      onClick={({ target, currentTarget }) =>
        handleBackdropClick(target, currentTarget)
      }
      onKeyDown={({ code }) => handleKeyDown(code)}
    >
      <div
        className={styles.modal_close}
        onClick={({ target, currentTarget }) =>
          handleBackdropClick(target, currentTarget)
        }
      ></div>
      <p className={styles.modal_title}>Настало время перемен к лучшему!</p>
      <p className={styles.modal_text}>
        Пройдите регистрацию и начните жить лучше уже сегодня!
      </p>
      {form}
    </div>
  );
}

//Modal.propTypes = {};

export default Modal;
