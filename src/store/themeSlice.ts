import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'light', // Establecemos el modo inicial a 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightMode: (state) => {
        console.log('mystate light')
      state.mode = 'light';
    },
    setDarkMode: (state) => {
        console.log('mystate dark')
      state.mode = 'dark';
    },
  },
});

export const { setLightMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
