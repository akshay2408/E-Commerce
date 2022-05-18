import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FALIUR,
} from "../ActionTypes/Actiontypes";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};
export const fetchProductSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const fetchProductFaliur = (error) => {
  return {
    type: FETCH_PRODUCTS_FALIUR,
    payload: error,
  };
};
export const fetchProductsData = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest);
    fetch("/data.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        dispatch(fetchProductSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchProductFaliur(error));
      });
  };
};
