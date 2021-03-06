import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
//aqui se hacden las consultas a  la base de datos
//esta funcion es la que se va a utilizar en la vista de
//crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
    dispatch(agregarProducto());
    try {
    dispatch(agregarProductoExito(producto));
    }catch(error){
        dispatch(agregarProductoError(true));
    }
}
 }

 const agregarProducto =()=>({
     type:AGREGAR_PRODUCTO, 
     payload:true

 })


 //si el producto se guarad en la base de datos
 const agregarProductoExito=producto => ({
type:AGREGAR_PRODUCTO_EXITO,
payload:producto,
 })

 //si hubo un error;
 const agregarProductoError=producto => ({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:producto,
     })