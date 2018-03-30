import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import red from 'material-ui/colors/red';
import teal from 'material-ui/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[400],
      contrastText: '#fff'
    },
    secondary: {
      main: teal[300],
      contrastText: '#fff'
    },
    error: red,
    tonalOffset: 0.2,
  },
});

export default ({ children }) => (
  <MuiThemeProvider theme={theme} >
    {children}
  </MuiThemeProvider>
);
