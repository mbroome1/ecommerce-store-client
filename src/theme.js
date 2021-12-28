import { createTheme } from '@mui/material/styles';
import { indigo, deepOrange, blueGrey,white } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        light: indigo[500],
        main: indigo[700],
        dark: indigo[900],
      },
      secondary: {
        light: deepOrange[500],
        main: deepOrange[800],
        dark: deepOrange[900],
      },
      blueGrey: {
        light: blueGrey[500],
        main: blueGrey[700],
        dark: blueGrey[900],
        contrastText: "#ffffff",
      }
    //   secondary: {
    //     main: green[500],
    //   },
    },
  });

  export default theme;