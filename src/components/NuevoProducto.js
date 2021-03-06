
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
//Action de Redux
import {crearNuevoProductoAction} from  "../actions/productoActions"

const NuevoProducto = () => {
  //useDispatch para mandar ejecutar las acciones que tengamos
  //useSelector es una forma en la que vas a acceder al estate dentro del component
  //state del component
  const [nombre, guardarNombre]=useState('');
  const [precio, guardarPrecio]=useState();
  //utilizamos usedispatch que devuelve/crea una funcion
  const dispatch = useDispatch();
//siempre que sea algo del action vamos a usar dispatch
//mandar llamar el action de productoAction
  const agregarProducto=producto=>dispatch(crearNuevoProductoAction(producto));
// cuando el usuario haga submitNuevoProducto
const submitNuevoProducto=e=>{
  e.preventDefault();
//validar formulario 
//para quitar espacio trim
if(nombre.trim()===''||precio<=0){
  return;
}
//si no hay errores

//crear el nuevo producto 
agregarProducto({
  nombre, 
  precio
});

}
  return (
    <div className=" row justify-content-center">
      <div className=" col-md-8">
        <div className="card">
          <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
          </h2>
          <form
            onSubmit={submitNuevoProducto}
          >
              <div className="form-group">
                  <label>Nombre del Producto</label>
                  <input 
                  type="text"
                   className="form-control"
                   placeholder="Nombre Producto"
                   name="nombre"
                   value={nombre}
                   onChange={e=> guardarNombre(e.target.value)}
                   />
              </div>
              <div className="form-group">
                  <label>Precio del Producto</label>
                  <input 
                  type="number"
                    className="form-control"
                    placeholder="Precio Producto" 
                   name="Precio"
                   value={precio}
                   onChange={e=> guardarPrecio(Number(e.target.value))}
                   />
              </div>
              <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
