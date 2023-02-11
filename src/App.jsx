import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BotonAgregarGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";
function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto") ?? 0)
  );
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  useEffect(() => {
    const presupuestoTmp = Number(
      Number(localStorage.getItem("presupuesto") ?? 0)
    );
    if (presupuestoTmp > 0) {
      setPresupuestoValido(true);
    }
  }, []);
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimar(true);
    }, 500);
  };
  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };
  const guardarGasto = (gasto) => {
    console.log(gasto);
    if (gasto.id) {
      console.log("ja");
      const gastosActualizados = gastos.map((gastoTmp) => {
        if (gastoTmp.id === gasto.id) {
          return gasto;
        } else {
          return gastoTmp;
        }
      });
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimar(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      ></Header>
      {presupuestoValido && (
        <>
          <main>
            <ListadoGastos
              eliminarGasto={eliminarGasto}
              setAnimar={setAnimar}
              setModal={setModal}
              setGastoEditar={setGastoEditar}
              gastos={gastos}
            ></ListadoGastos>
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
      {modal && (
        <Modal
          setGastoEditar={setGastoEditar}
          gastoEditar={gastoEditar}
          guardarGasto={guardarGasto}
          setModal={setModal}
          animar={animar}
          setAnimar={setAnimar}
        ></Modal>
      )}
    </div>
  );
}

export default App;
