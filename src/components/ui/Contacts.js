import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {showAll} from '../store.js'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
};

class Contacts extends React.Component {
  state = { expanded: false };

  

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
        <div className="container">
          <div className="row">
          <React.Fragment className="col-6">
            {['Hello all', 'anant', 'some random'].map((text, index) => (
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        </React.Fragment>
          </div>
        </div>

        
        
        

      
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);