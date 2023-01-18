import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

//thunks

//a bit complex way
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

//easy way

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUES.ERROR));
//     }
//   };
// }
