import React , {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PickCinema from '../pages/PickCinema';


import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import blue from '@material-ui/core/colors/blue';

import { palette } from '@material-ui/system';


import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';


import {showAll,pickCinema} from '../store.js'


const styles_date = {
  grid: {
    width: '60%',
  },
};






const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles_d = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

const datePicker =  {
  color: palette.primary1Color,
  textColor: palette.alternateTextColor,
  calendarTextColor: palette.textColor,
  selectColor: palette.primary2Color,
  selectTextColor: palette.alternateTextColor,
  calendarYearBackgroundColor: palette.canvasColor,
  headerColor: palette.pickerHeaderColor || palette.primary1Color,
}



const d_width = {
  width : '400px'
}


class SimpleDialog extends React.Component {

    state = {
      cinema_l : pickCinema
    }

    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    handleListItemClick = value => {
      this.props.onClose(value);
    };
  
    render() {
      let { cinema_l } = this.state;
      const { classes, onClose, selectedValue, ...other } = this.props;

      console.log('cinema_l :', cinema_l);
  
      return (
        <div style={d_width}>
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} fullWidth={true} maxWidth = {'md'}>
          <DialogTitle id="simple-dialog-title">Pick Cinema</DialogTitle>
          <div>
            <List>
              {cinema_l.Cinema.map(c => (
                <ListItem button onClick={() => this.handleListItemClick(c)} key={c.CinemaID}>
                  <ListItemText primary={c.CinemaName} secondary={c.Address}/>
                </ListItem>
              ))}
            </List>
          </div>
        </Dialog>
        </div>
      );
    }
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };
  
const SimpleDialogWrapped = withStyles(styles_d)(SimpleDialog);
  

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 400,
    },
  };

class MovieDet extends Component{

    state = {
        open: false,
        selectedValue: emails[1],
        showAll : showAll,
        c_name : 'Pick Cinema',
        selectedDate: new Date('2014-08-18T21:11:54'),
        is_active : false
      };

    handleClickOpen = () => {
        const { open } = this.state;

        console.log('open', open)
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        console.log('value :', value);
        this.setState({ selectedValue: value, open: false, c_name : value.CinemaName , is_active : true});
    };


    handleDateChange = date => {
      this.setState({ selectedDate: date });
    };
  

    

    render(){
        const {showAll,c_name,selectedDate, is_active } = this.state;
        const { classes } = this.props;
        let { mov }  = this.props.location;


        console.log('selectedDate :', selectedDate);

        console.log('styles.datePicker', styles.datePicker)


        if(!mov){
          mov = showAll.shows[0].Movies[0]
          // mov = showAll.shows[0].Movies[0]
        }
        return <div className="container">
            <div className="row">
            <div className="col-md-4">
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.cover}
                image={mov.Image}
                title="Contemplative Reptile"
                />
            </CardActionArea>
            </Card>
            </div>
            <div className="col-md-8">
            <Typography variant="h2" gutterBottom className="text-white">
                {mov.Name}
            </Typography>
            <List component="nav" className={classes.root}>
            <ListItem button>
                <ListItemText primary={`Release Year : ${mov.Year}`} />
            </ListItem>
            <ListItem button>
                <ListItemText primary={`Run Time : ${mov.Time}`} />
            </ListItem>
            <ListItem button>
                <ListItemText primary={`Rated : ${mov.Rated}`} />
            </ListItem>
            <ListItem button>
                <ListItemText primary={`Format : ${mov.Format}`} />
            </ListItem>
            <ListItem button>
                <ListItemText primary={`Language : ${mov.Language}`} />
            </ListItem>
            </List>
            <div className="container">
                <div className="row">
                <div className="col-md-6 my-3">
                <Button variant="contained" size="medium" color="primary" className={classes.margin}
                    onClick={this.handleClickOpen}
                >
                    {c_name}
                </Button>
                
                </div>
                <div className="col-md-6">
                {is_active ? (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    margin="normal"
                    label="Date picker"
                    value={selectedDate}
                    className="mt-0"
                    onChange={this.handleDateChange}
                  />
                  </MuiPickersUtilsProvider>
                ) : null}
                {/* <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                    Pick Date
                </Button> */}
          
                </div>
                </div>
            </div>

            </div>
            </div>
            <SimpleDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.open}
            onClose={this.handleClose}
            />

        </div>
    }
}

MovieDet.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  


export default withStyles(styles)(MovieDet);