import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import HelpIcon from '@material-ui/icons/Help';
import ErrorIcon from '@material-ui/icons/Error';
import {useHistory} from 'react-router-dom';
import FindInPageIcon from '@material-ui/icons/FindInPage';

const Listitems = ()=>{
	const history = useHistory()
	return(
		<>
			<ListItem button onClick={()=>history.push('/chatbot')} style={{marginTop:"10px"}}>
        <ListItemIcon>
          <VerifiedUserIcon />
        </ListItemIcon>
        <ListItemText primary="Fake News Checker" />
      </ListItem>
      <ListItem button onClick={()=>history.push('/')}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="About This Project" />
      </ListItem>
		</>
	);
}

export default Listitems