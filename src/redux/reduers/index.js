import { combineReducers } from "redux";
import productReducer from "./productReducers";
import { selectProductReducer,cartReducer} from "./productReducers";

const reducers = combineReducers({
    allProducts : productReducer,
    product : selectProductReducer,
    
});
export default reducers;