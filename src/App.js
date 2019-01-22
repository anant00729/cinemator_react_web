import React, { Component } from 'react';

import HeaderTh from './components/pages/HeaderTh';
import { MuiThemeProvider, createMuiTheme, getMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import './App.css';



const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[600] }, // Purple and green play nicely together.
    datePicker :  {
      color : blue[200],
      textColor: blue[200],
      calendarTextColor: blue[200],
      selectColor: blue[200],
      selectTextColor: blue[200],
      calendarYearBackgroundColor: blue[200],
      headerColor: blue[200] || blue[200],
    },
    App


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
