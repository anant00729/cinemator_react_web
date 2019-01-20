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




const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles_d = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};


class SimpleDialog extends React.Component {
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    handleListItemClick = value => {
      this.props.onClose(value);
    };
  
    render() {
      const { classes, onClose, selectedValue, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <div>
            <List>
              {emails.map(email => (
                <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItem>
              ))}
              <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="add account" />
              </ListItem>
            </List>
          </div>
        </Dialog>
      );
    }
  }
  
  SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
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
      };

    handleClickOpen = () => {
        const { open } = this.state;

        console.log('open', open)
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render(){
        const { classes } = this.props;
        const { mov }  = this.props.location;

        console.log('mov :', mov);
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
                <div className="col-md-6">
                <Button variant="contained" size="medium" color="primary" className={classes.margin}
                    onClick={this.handleClickOpen}
                >
                    Pick Cinema
                </Button>
                
                </div>
                <div className="col-md-6">
                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                    Pick Date
                </Button>
          
                </div>
                </div>
            </div>

            </div>
            </div>
            <PickCinema
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