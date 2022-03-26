import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline,Container} from '@material-ui/core';
import TopBar from './Components/TopBar'
import CustomDrawer from './Components/Drawer'


const CustomContainer = props=>{
  const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth:'100vw'
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
  },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  }
}));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar handleDrawerOpen={handleDrawerOpen} open={open}/>
      <CustomDrawer open={open} handleDrawerClose={handleDrawerClose}/>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  );
}

export default CustomContainer;