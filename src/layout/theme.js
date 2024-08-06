import { createTheme } from "@mui/material/styles";



export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd"
    },
    secondary: {
      main: "#bd93f9"
    }
  },
  typography: {
    fontFamily: "Tanha , Vazir , roboto",
    button: {
      fontFamily: "tahoma",
      fontSize: "1rem"
    }
  },
});


export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd"
    },
    secondary: {
      main: "#bd93f9"
    } ,
    textdary : {
      main : "black"
    }
  },
  typography: {
    fontFamily: "Tanha , Vazir , roboto",
    button: {
      fontFamily: "tahoma",
      fontSize: "1rem"
    }
  },
});
