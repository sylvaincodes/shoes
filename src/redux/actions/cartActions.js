// déclarer les noms des actions

export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

// declarer les functions des actions

export const addToCart = ({
  product,
  quantity,
  selectedProductColor,
  selectedProductSize,
}) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product : product,
        quantity: quantity,
        selectedProductColor: selectedProductColor
          ? selectedProductColor
          : null,
        selectedProductSize: selectedProductSize
          ? selectedProductSize
          : null,
      },
    });
  };
};


export const deleteFromCart = ({
  product,
}) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FROM_CART,
      payload: {
        product : product
       
      },
    });
  };
};
