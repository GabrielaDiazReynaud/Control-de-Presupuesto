import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BotonAgregarGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";
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
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados]= useState([]);
  useEffect(() => {
    const presupuestoTmp = Number(
      Number(localStorage.getItem("presupuesto") ?? 0)
    );
    if (presupuestoTmp > 0) {
      setPresupuestoValido(true);
    }
  }, []);
 useEffect(()=>{
   if(filtro){
    const gastosFiltradosTmp = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltradosTmp);
   }
 },[filtro])
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
    if (gasto.id) {
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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      ></Header>
      {presupuestoValido && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>
            <ListadoGastos
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
