import React from 'react';
import Routes from './routes';
import './global.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { outerTheme } from './ThemeProvider';
import './config/firebase-config';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={outerTheme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
