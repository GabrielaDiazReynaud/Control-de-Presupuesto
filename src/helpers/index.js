export const generarId=()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random +fecha
}

export const formatearFecha=(fecha)=>{
    const fechaTmp = new Date(fecha);
    const formatoFecha ={
        year :'numeric',
        month: 'long' , 
        day : '2-digit'
    }
    return fechaTmp.toLocaleDateString('es-ES', formatoFecha)
}