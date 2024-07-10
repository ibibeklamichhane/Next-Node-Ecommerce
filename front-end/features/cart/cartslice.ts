 "use client";

import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      console.log('Adding item in reducer:', action.payload);

      state.items.push(action.payload);

      console.log('Reducer: New state:', state.items);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
   

    /*
   removeItem: (state, action: PayloadAction<CartItem>) => {
      const itemToRemove = action.payload;
      return state.items.filter(
        (item) =>
          item.name !== itemToRemove.name || item.price !== itemToRemove.price
      );
    },*/
    
  },
  
  
} 
);

export const getItemsSelector = createSelector(
  (state: { cart: CartItem[] }) => state.cart,
  (state) => state
);

export const { addItem, updateQuantity,removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
