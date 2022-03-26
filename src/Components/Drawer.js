import React from 'react'
import {Drawer,Divider,List,Hidden} from '@material-ui/core';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Listitems from './ListItems'

const CustomDrawer = props=>{
	const drawerWidth = 240;
	const useStyles = makeStyles(theme => ({
	  root: {
	    display: 'flex',
	  },
	  drawerPaper: {
	    position: 'relative',
	    whiteSpace: 'nowrap',
	    width: drawerWidth,
	    transition: theme.transitions.create('width', {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.enteringScreen,
	    }),
	  },
	  drawerPaperClose: {
	    overflowX: 'hidden',
	    transition: theme.transitions.create('width', {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	    width: theme.spacing(7),
	    [theme.breakpoints.up('sm')]: {
	      width: theme.spacing(9),
	    },
	  },
	}));

	const classes = useStyles();

	return(
		<>
		<Hidden mdUp>
				<Drawer
			    // variant="permanent"
			    classes={{
			      paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
			    }}
			    open={props.open}
			  >
			    <div className={classes.toolbarIcon}>
			      <IconButton onClick={props.handleDrawerClose}>
			        <ChevronLeftIcon />
			      </IconButton>
			    </div>
			    <Divider />
			    <List><Listitems /></List>
			    <Divider />
			  </Drawer>
			</Hidden>
			<Hidden smDown>
				<Drawer
			    variant="permanent"
			    classes={{
			      paper: clsx(classes.drawerPaper, !true && classes.drawerPaperClose),
			    }}
			    open={true}
			  >
			    <div className={classes.toolbarIcon}>
			      <IconButton onClick={props.handleDrawerClose}>
			        <ChevronLeftIcon />
			      </IconButton>
			    </div>
			    <Divider />
			    <List><Listitems /></List>
			    <Divider />
			  </Drawer>
			</Hidden>
			</>
	);
}

export default CustomDrawer 