import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tdata } from "../mocks/data";
export type TState = {
  basket: {
    name: string;
    price: number;
    salePrice?: number;
    image: string;
    rating: number;
    id: number;
    count: number;
  }[];
  openModal: boolean;
};
const initialState: TState = {
  basket: [],
  openModal: false,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Tdata>) => {
      state.basket.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter(
        (el) => el.id !== action.payload,
      );
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      const item = state.basket.find(
        (item) => item.id === action.payload,
      );
      if (item) {
        item.count += 1;
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const item = state.basket.find(
        (item) => item.id === action.payload,
      );
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
  },
});

export default productSlice.reducer;
export const { addItem, deleteItem, decrementItem, incrementItem } =
  productSlice.actions;
