import React from 'react';
import Routes from './routes';
import './styles/global.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { outerTheme } from './styles/ThemeProvider';
import './config/firebase-config';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={outerTheme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
