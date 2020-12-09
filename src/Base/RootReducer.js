import {combineReducers} from "redux"
import MenuReducer from "../Module/LeftContainer/redux/MenuReducer"
import FetchUserReducer from "../Module/RestSample/redux/FetchUserReducer";
import ReducerStyle2 from '../Module/MainContent/redux/ReducerStyle2'

const allReducres = combineReducers({
    menuReducer: MenuReducer,
    fetchUserReducer:FetchUserReducer,
    reducerStyle2:ReducerStyle2
    
    // menuState: menuReducer || (() => null) 
});

export default allReducres;