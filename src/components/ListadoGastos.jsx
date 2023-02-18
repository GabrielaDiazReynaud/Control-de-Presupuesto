import React from "react";
import { useState } from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  filtro,
  gastosFiltrados,
  eliminarGasto,
  setModal,
  gastos,
  setGastoEditar,
  setAnimar,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro
        ? 
        <>
         <h2>{gastosFiltrados.length > 0 ? "Gastos" : "No hay Gastos en esta Categoria"}</h2>
        {gastosFiltrados.map((gasto) => {
            return (
              <Gasto
                eliminarGasto={eliminarGasto}
                setAnimar={setAnimar}
                setModal={setModal}
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
              ></Gasto>
            );
          })}
          </>
        :
        <>
         <h2>{gastos.length > 0 ? "Gastos" : "No hay Gastos"}</h2>
       {
       gastos.map((gasto) => {
            return (
              <Gasto
                eliminarGasto={eliminarGasto}
                setAnimar={setAnimar}
                setModal={setModal}
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
              ></Gasto>
            );
          })}
        
          </>  }
    </div>
  );
};

export default ListadoGastos;
