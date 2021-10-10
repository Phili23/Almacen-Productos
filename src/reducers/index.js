import {combineReducers} from 'redux';
import productosReducer from './productosReducer'
//se puede tener multiples reducers per//combine nos va apoder usar varios reducer
export default combineReducers({
    productos:productosReducer
});