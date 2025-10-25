import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
};

const calculateCartTotal = (products) => {
  const selectedItems = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  return { selectedItems, totalPrice };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
        
      }
      else{
        alert("already added")
      }
      const totals = calculateCartTotal(state.products);
      state.selectedItems = totals.selectedItems;
      state.totalPrice = totals.totalPrice;
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
