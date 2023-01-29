import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BotonAgregarGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal , setModal] = useState(false);
  const [animar , setAnimar] = useState(false);
   const handleNuevoGasto =()=>{
    setModal(true);
    setTimeout(()=>{
      setAnimar(true);
    },500)
   }
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      ></Header>
      {presupuestoValido && (
        <div className="nuevo-gasto">
          <img
            src={BotonAgregarGasto}
            alt="boton nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && <Modal setModal={setModal} animar={animar} setAnimar={setAnimar}></Modal>}
    </div>
  );
}

export default App;
