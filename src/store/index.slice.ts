import { createSlice } from "@reduxjs/toolkit";
interface PortfolioState {
  id: string;
}

const initialState: PortfolioState = {
  id: "",
};

const PortfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
});

const PortfolioReducer = PortfolioSlice.reducer;

export default PortfolioReducer;
