import { ThemeProvider, createTheme } from '@mui/material/styles';

export const customizeTheme = (theme) => {
  const { mainPrimary } = theme;
  return createTheme({
    palette:{
      primary: {
        main: mainPrimary
      }
    }
  })
}