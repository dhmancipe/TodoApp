import {  useEffect } from 'react'

import './App.css'
import TodoView from './components/TodoView'
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider, GlobalStyles,useTheme } from '@mui/material';
import { RootState } from './store';
import { lightTheme, darkTheme } from './theme/theme';
import { setLightMode, setDarkMode } from './store/themeSlice';


function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode)
  const theme = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        dispatch(setDarkMode());
      } else {
        dispatch(setLightMode());
      }
    };


    if (mediaQuery.matches) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }


    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
    console.log('cambio')
  }, [dispatch])

  return (
    <>
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
    <CssBaseline />
    
      <TodoView/>
      </ThemeProvider>
    </>
  )
}

export default App
