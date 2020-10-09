import {
  red,
  blue,
  yellow,
  indigo,
  green,
  grey
} from "@material-ui/core/colors"
import {
  createMuiTheme
} from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "none",
      },
      root: {
        textTransform: "none",
      },
    },
    MuiTypography: {
      body2: {
        fontSize: "16px",
      },
      subheading: {
        fontSize: "18px",
      },
    },
  },
})

export const defaultTheme = {
  primaryColor: red[400],
  primaryHoverColor: red[50],
  primaryHoverBorderColor: red[100],
  primaryActiveColor: red[100],
  textColorOnPrimary: grey[300],
  textColor: grey[900],
  textColorInvented: grey[200],
  disabled: grey[400],
  textOnDisabled: grey[300],
  formElementBackground: grey[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
}

export const blueTheme = {
  primaryColor: blue[100],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: blue[300],
  textColor: blue[900],
  textColorInvented: blue[200],
  disabled: blue[400],
  textOnDisabled: blue[300],
  formElementBackground: blue[100],
  status: {
    warningColor: blue[100],
    warningColorHover: blue[200],
    warningColorActive: blue[300],
    errorColor: blue[100],
    errorColorHover: blue[200],
    errorColorActive: blue[300],
    successColor: blue[100],
    successColorHover: blue[200],
    successColorActive: blue[300]
  }
}

// TODO: Make Red the Default Theme

export const indigoTheme = {
  primaryColor: indigo[600],
  primaryHoverColor: indigo[50],
  primaryHoverBorderColor: indigo[100],
  primaryActiveColor: indigo[100],
  textColorOnPrimary: indigo[300],
  textColor: indigo[900],
  textColorInvented: indigo[200],
  disabled: grey[400],
  textOnDisabled: grey[300],
  formElementBackground: grey[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
}


export default theme
