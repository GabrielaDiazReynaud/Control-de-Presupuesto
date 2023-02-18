import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ControlPresupuesto = ({ setPresupuestoValido, setGastos, setPresupuesto, gastos, presupuesto }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
    const totalGastos = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastos;
    setDisponible(totalDisponible);
    setGastado(totalGastos);
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  }, [gastos]);

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleReset = ()=>{
    const resultado = confirm('Deseas reiniciar la aplicacion?')
    if(resultado){
      console.log("hola")
      setGastos([])
      setPresupuesto(0)
      setPresupuestoValido(false)
      localStorage.setItem("gastos",[]);
      localStorage.setItem('presupuesto',0);
    }
  }
  return (
    <div className="contenedor-presupuesto contendo sombra dos-columnas ">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "red" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: porcentaje > 100 ? "red" : "#3B82F6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastos`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span>
          {formatearPresupuesto(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
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
