import React from "react";
import BotonCerrar from "../img/cerrar.svg";
const Modal = ({ setModal }) => {
  const cerrarModal = () => {
    setModal(false);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        {" "}
        <img src={BotonCerrar} alt="cerrar modal" onClick={cerrarModal} />
      </div>
    </div>
  );
};

export default Modal;
