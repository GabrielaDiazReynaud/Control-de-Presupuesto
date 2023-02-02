import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({setModal, gastos, setGastoEditar,setAnimar}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length > 0 ? "Gastos" : "No hay Gastos"}</h2>
      {gastos.map((gasto) => {
        return <Gasto setAnimar={setAnimar} setModal={setModal} key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar}></Gasto>
      })}
    </div>
  );
};

export default ListadoGastos;
