import React , {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {tileData,showAll} from '../store.js';
import { Link } from 'react-router-dom';


const see_all = {
    marginLeft: "8px",
    marginTop: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "90px",
    height: '40px',
    float: 'right'
}

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: "column",
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      

    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      minHeight : '400px'
    },
    title: {
      color: theme.palette.primary.light,
      
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        minHeight : '300px'
    },
  });


  const item_s = {
      minHeight : '400px',
      width : '210px'
  }

  const cardMedia = {
    minHeight : '281px',
  }


  
class Home extends Component {

    state = {
        showAll : showAll
    }

    onMovieClick = () => {

    }

    render(){
        const {showAll} = this.state
        const { classes } = this.props;

        console.log('showAll :', showAll);
        return  <div className={classes.root}>
             {showAll.shows.map(s => (
                <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                <Typography textCenter variant="h5" component="h2" className="my-3 text-white">
                        {s.Title}
                </Typography>
                <Button variant="contained" color="primary" className={classes.button} style={see_all} component={Link} to="/movie_detail">
                    See all
                </Button>
                </div>
            </div>                    
            
            <GridList className={classes.gridList} cols={6.5}>
            { s.Movies.map(m => (
                <GridListTile key={m.ID} style={item_s}>
                    <div >
                    <Card className={classes.card}>

                    <CardActionArea component={Link} to={{pathname : "/movie_detail" , mov : m}} >
                    <CardMedia
                        style= {cardMedia}
                        className={classes.media}
                        image={m.Image}
                        title={m.ID}
                    />
                    <CardContent>
                        <Typography variant="subtitle1" className="text-center">
                        {m.Name}
                        </Typography>
                        
                    </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                </GridListTile>
            ))}
            </GridList>
            </React.Fragment>))}
      </div>
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Home);
