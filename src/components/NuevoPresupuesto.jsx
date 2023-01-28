import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto , setPresupuesto, setPresupuestoValido}) => {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = (e) =>{
   e.preventDefault();
   if(!presupuesto || Number(presupuesto)<0){
      setMensaje("No es un presupuesto valido")
      return
   } else{
    setPresupuestoValido(true)
    setMensaje("")
   }
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className='campo'>
            <label>Definir presupuesto</label>
            <input
            className='nuevo-presupuesto'
            type ="number"
            placeholder='Presupuesto'
            value={presupuesto}
            onChange= {(e) =>setPresupuesto(Number(e.target.value))}
            />
        </div>                         
        <input type="submit" value="Añadir"/>
        {mensaje && <Mensaje tipo ="error">{mensaje}</Mensaje> }

      </form>
    </div>
  )
}

export default NuevoPresupuesto
