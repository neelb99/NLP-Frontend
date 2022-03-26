import React from 'react';
import clsx from 'clsx'
import {Typography,AppBar,Toolbar,IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const TopBar = props=>{
	const drawerWidth = 240;
	const useStyles = makeStyles(theme => ({
	  toolbar: {
	    paddingRight: 24, // keep right padding when drawer closed
	  },
	  toolbarIcon: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'flex-end',
	    padding: '0 8px',
	    ...theme.mixins.toolbar,
	  },
	  appBar: {
	    zIndex: theme.zIndex.drawer + 1,
	    transition: theme.transitions.create(['width', 'margin'], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	  },
	  appBarShift: {
	    marginLeft: drawerWidth,
	    width: `calc(100% - ${drawerWidth}px)`,
	    transition: theme.transitions.create(['width', 'margin'], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.enteringScreen,
	    }),
	  },
	  menuButton: {
	    marginRight: 36,
	  },
	  menuButtonHidden: {
	    display: 'none',
	  },
	  title: {
	    flexGrow: 1,
	  },
	}));

	const classes = useStyles();

	return(
		<AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Fake News Detection
          </Typography>
        </Toolbar>
      </AppBar>
	);
}

export default TopBar