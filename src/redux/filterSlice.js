import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;