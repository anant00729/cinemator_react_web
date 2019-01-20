import React, { Component } from 'react';

import HeaderTh from './components/pages/HeaderTh';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import './App.css';



const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[800] }, // Purple and green play nicely together.
    // secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
  
});


class App extends Component {


  componentWillMount(){
    console.log('compoent Will Mount')
  }

  render() {
    console.log('render')
    return (
      <MuiThemeProvider theme={theme}>
        <HeaderTh/>
      </MuiThemeProvider>
    );
  }


  componentDidMount(){
    console.log('component Did mount')
  }
}

export default App;
