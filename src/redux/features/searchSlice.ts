import { createAppSlice } from "@/redux/createAppSlice";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
  results: Result[];
}

interface Result {
  id: number;
  title: string;
  description: string;
}

const initialState: SearchState = {
  query: '',
  results: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setResults: (state, action: PayloadAction<Result[]>) => {
      state.results = action.payload;
    },
  },
  selectors: {
    selectQuery: (search) => search.query,
    selectResults: (search) => search.results,
  }
});

export const { setQuery, setResults } = searchSlice.actions;

export default searchSlice.reducer;
