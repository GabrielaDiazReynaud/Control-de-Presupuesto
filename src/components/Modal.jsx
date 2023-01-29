import React from "react";
import BotonCerrar from "../img/cerrar.svg";
const Modal = ({ setModal, animar ,setAnimar }) => {
  const cerrarModal = () => {
    
    setAnimar(false);
    setTimeout(()=>{
      setModal(false);
    },500)
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        {" "}
        <img src={BotonCerrar} alt="cerrar modal" onClick={cerrarModal} />
      </div>
      <form className= {`formulario ${animar ?"animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        <div className ="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input id="nombre" type="text" placeholder="Nombre del gasto"></input>
        </div>
        <div className ="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input id="cantidad" type="number" placeholder="Cantidad del gasto"></input>
        </div>
        <div className ="campo">
          <label htmlFor="categoria">Categoria</label>
          <select  id="categoria">
           <option value="">-- Seleccione --</option>
           <option value="ahorro">Ahorro</option>
           <option value="comida">Comida</option>
           <option value="casa">Casa</option>
           <option value="gastos">Gastos Varios</option>
           <option value="ocio">Ocio</option>
           <option value="salud">Salud</option>
           <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Agregar Gasto"></input>
      </form>
    </div>
  );
};

export default Modal;
