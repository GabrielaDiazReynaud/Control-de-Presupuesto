import React, { useEffect, useState } from "react";

const ControlPresupuesto = ({gastos, presupuesto}) => {
  const [disponible, setDisponible]= useState(0);
  const[gastado , setGastado]= useState(0);
  useEffect(()=>{

      const totalGastos= gastos.reduce((total, gasto)=>gasto.cantidad +total , 0 )
      const totalDisponible =presupuesto - totalGastos;
      setDisponible(totalDisponible);
      setGastado(totalGastos);


  },[gastos])
  const formatearPresupuesto = (cantidad)=>{
        return cantidad.toLocaleString('en-US', {style: 'currency', currency : 'USD'})
    }
  return (
    <div className="contenedor-presupuesto contendo sombra dos-columnas ">
      <div>Grafica aqui</div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearPresupuesto(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatearPresupuesto(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
