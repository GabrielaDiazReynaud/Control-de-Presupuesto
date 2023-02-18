import React from "react";
import { formatearFecha } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";
const diccionarioICONOS = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};


const Gasto = ({ eliminarGasto, gasto, setGastoEditar ,setModal,setAnimar }) => {
  const editarGasto =()=>{
    setGastoEditar(gasto);
    setModal(true);
    setTimeout(()=>{
      setAnimar(true);
    },500)
  }
  const leadingActions=()=>(
    <LeadingActions>
      <SwipeAction onClick={()=>editarGasto()}>Editar</SwipeAction>
    </LeadingActions>
  )

  
  const trailingActions=()=>(
    <TrailingActions>
      <SwipeAction onClick={()=>eliminarGasto(gasto.id)}
      destructive={true}
      >Borrar</SwipeAction>
    </TrailingActions>
  )

  
  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className="gasto sombra">
          <div className="conetenido-gasto">
            <img src={diccionarioICONOS[gasto.categoria]} alt="Icono Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombre}</p>
              <p className="fecha-gasto">
                Fecha :{""} <span>{formatearFecha(gasto.fecha)}</span>{" "}
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${gasto.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
