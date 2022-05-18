import { combineReducers } from "redux";
import FetchProductReducer from "./FetchProductReducer";
import {CartReducer} from './CartReducer';
import {WishlistReducer} from './WishlistReducer'

const Reducer = combineReducers({
	userReducer: FetchProductReducer,
	Cart:CartReducer,
	WishList:WishlistReducer,
})
export default Reducer;