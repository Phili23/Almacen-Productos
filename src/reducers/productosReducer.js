// cada reducer tiene su propio state
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

const initialState={
    productos:[],
    error:null,
    loading:false
}

export default function(state =initialState,action){
switch(action.type){
    case AGREGAR_PRODUCTO:
        return{
            ...state, 
            loading:true
        }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state, 
                loading:false,//false porque ya se guardo en nuestra base de datos
                productos:[...state.productos, action.payload]

            }
    default:
        return state;
}
}
//payload modifica el state
// el dispatch siempre es el que manda a ejecutar las acciones y se pasan como objetos
//acction.type es para ir describiendo nuestra aplicacion
//acyion.payload es lo que lo ma va modificando