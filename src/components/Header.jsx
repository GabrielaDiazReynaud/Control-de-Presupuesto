import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {presupuestoValido ? (
        <ControlPresupuesto presupuesto={presupuesto}></ControlPresupuesto>
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
