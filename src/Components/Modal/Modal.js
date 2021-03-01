import React from "react";
import "./Modal.css";
const Modal = ({ selectedPlayer, closeModal }) => {
  return (
    <div className="my-modal">
      <div className="my-modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <h4>
          <strong>{selectedPlayer}</strong> is already in your squad.
        </h4>
      </div>
    </div>
  );
};

export default Modal;
