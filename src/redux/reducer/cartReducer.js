const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.some((obj) => obj.id === action.payload.id);

      if (itemExists) {
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, count: obj.count + action.payload.count };
          }
          return obj;
        });
      } else {
        return [...state, action.payload];
      }

    case "REMOVE_TO_CART":
      const Array = state.filter((obj) => obj.id !== action.payload.id);
      return [...Array];

    case "REMOVE_ALL_CART_ITEM":
      return [];

    default:
      return state;
  }
};
export default cartReducer;
