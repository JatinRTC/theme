import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Page from '../src/Page/Page.js'
import { CssBaseline } from '@mui/material';
import theme from '../src/Theme/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Page />
    </ThemeProvider>
  );
}

export default App;
