import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './Components/TopBar'
import ChatbotDrawer from './Components/ChatbotDrawer'


const HomeContainer = props=>{
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
      <ChatbotDrawer open={open} handleDrawerClose={handleDrawerClose}/>
        <div className={classes.appBarSpacer} />
          {props.children}
    </div>
  );
}

export default HomeContainer;