import React, { useState } from "react";
import BotonCerrar from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({ setModal, animar, setAnimar, guardarGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error , setError]= useState("")
  const cerrarModal = () => {
    setAnimar(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if([nombre, cantidad, categoria ].includes('')){
      setError("Todos lo campos son obligatorios")
      setTimeout(()=>{
        setError("")
      }, 3000)
    } else{
      guardarGasto({nombre, cantidad, categoria})
    }
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        {" "}
        <img src={BotonCerrar} alt="cerrar modal" onClick={cerrarModal} />
      </div>
      <form className={`formulario ${animar ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
        <legend>Nuevo Gasto</legend>
        {error && <Mensaje tipo="error">{error}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          ></input>
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria"  value ={categoria} onChange={e=> setCategoria(e.target.value)}>
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
