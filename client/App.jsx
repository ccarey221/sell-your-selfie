import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import AppRouter from './Router';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        showMenuIconButton={false}
      />
      <AppRouter />
    </div>
  </MuiThemeProvider>
);

export default App;
