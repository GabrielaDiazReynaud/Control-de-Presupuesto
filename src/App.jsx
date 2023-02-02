import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BotonAgregarGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal , setModal] = useState(false);
  const [animar , setAnimar] = useState(false);
  const [gastos, setGastos]= useState([]);
  const [gastoEditar, setGastoEditar]= useState({});
   const handleNuevoGasto =()=>{
    setModal(true);
    setTimeout(()=>{
      setAnimar(true);
    },500)
   }

   const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha= Date.now();
    setGastos([...gastos, gasto])
    setAnimar(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
   }
  return (
    <div className={modal ? 'fijar' :''}>
      <Header
        gastos ={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      ></Header>
      {presupuestoValido && (
       <>
       <main>
        <ListadoGastos setAnimar={setAnimar} setModal ={setModal }setGastoEditar={setGastoEditar} gastos={gastos}></ListadoGastos>
       </main>
       <div className="nuevo-gasto">
          <img
            src={BotonAgregarGasto}
            alt="boton nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
        </>
      )}
      {modal && <Modal guardarGasto={guardarGasto} setModal={setModal} animar={animar} setAnimar={setAnimar}></Modal>}
    </div>
  );
}

export default App;
