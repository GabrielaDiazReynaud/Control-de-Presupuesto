import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
  gastos,
  setGastos
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {presupuestoValido ? (
        <ControlPresupuesto  setPresupuestoValido={setPresupuestoValido} setGastos={setGastos} gastos ={gastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto}></ControlPresupuesto>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresupuestoValido={setPresupuestoValido}
        ></NuevoPresupuesto>
      )}
    </header>
  );
};

export default Header;
