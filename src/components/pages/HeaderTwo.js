import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import RouterPath from './RoutePath'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { HashRouter as Router , Route , Switch} from 'react-router-dom';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class HeaderTwo extends React.Component {
  state = {
    mobileOpen: false,
    menuIndex : 0
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  btnClick = () => {
      this.setState({mobileOpen: false})
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Router>
                <MenuList>
                    <MenuItem className={classes.menuItem} component={Link} to="/" onClick={this.btnClick}>
                    <ListItemIcon className={classes.icon}>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem} component={Link} to="/home" onClick={this.btnClick}>
                    <ListItemIcon className={classes.icon}>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem} component={Link} to="/some" onClick={this.btnClick}>
                    <ListItemIcon className={classes.icon}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Some" />
                    </MenuItem>
                </MenuList>
        </Router>
        {/* <List>
          {['Hello all', 'anant', 'some random'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon
              
              >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText 
              key = {index}
              value = {index}
              primary={text} 
              button={index}
              to={['/', '/home'][menuIndex]}
              onClick={() => this.btnClick(index)}/>
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Cinemator
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <RouterPath />
        </main>
      </div>
    );
  }
}

HeaderTwo.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(HeaderTwo);