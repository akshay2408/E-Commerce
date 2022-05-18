import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FALIUR,
} from "../ActionTypes/Actiontypes";

const initialState = {
  loading: "",
  data: [],
  error: "",
};
const FetchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        loading: "true",
        error: "",
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        data: action.payload,
      };
    case FETCH_PRODUCTS_FALIUR:
      return {
        loading: "false",
        error: action.payload,
      };
    default:
      return state;
  }
};
export default FetchProductReducer;
