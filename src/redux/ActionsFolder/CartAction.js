import {
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART,
  INCREASE_TO_CART,
  DECRESE_TO_CART,
} from '../ActionTypes/Actiontypes';

// product-product that we are going to add in cart

export const addToCart = (product,setCount) => (dispatch, getState) => {
  const cartItems = getState().Cart.cartItems
  let alreadyExist = false
  cartItems.forEach(x => {
    if (x.id === product.id) {
      alreadyExist = true;
    }
  })
  if (!alreadyExist) {
    cartItems.push({ ...product,quantity:1 })
  }
  setCount(cartItems.length)
  dispatch({
    type: FETCH_CART_SUCCESS,
    payload: { cartItems }
  })
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeFromCart = (product,setCount) => (dispatch, getState) => {
  const cartItems = getState().Cart.cartItems.slice().filter((x) => x.id !== product.id)
  setCount(cartItems.length)
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  })
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const UpdateQty = (product) => (dispatch, getState) => {
  const cartItems = getState().Cart.cartItems.map((x) => x.id === product.id ? { ...x, quantity: x.quantity ? x.quantity + 1 : 1 } : x);
  dispatch({
    type: INCREASE_TO_CART,
    payload: { cartItems }
  })
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const DecreaseQty = (product) => (dispatch, getState) => {
  const cartItems = getState().Cart.cartItems.map((x) => x.id === product.id ? { ...x, quantity: x.quantity ? x.quantity - 1 : 1 } : x);
  dispatch({
    type: DECRESE_TO_CART,
    payload: { cartItems }
  })
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

// export const Total=(product)=>(dispatch,getState)=>{
//   // let total
//   // const cartItems = getState().Cart.cartItems.map((x) =>{total=total+x.amount*x.quantity});
//   // dispatch({
//   //   type: SET_SIZE,
//   //   payload: { cartItems }
//   // })
//   // localStorage.setItem('cartItems', JSON.stringify(cartItems))
// }
