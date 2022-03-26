import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <BrowserRouter>
    	<Switch>
	    	<Route exact path ='/chatbot' component={Home}/>
	    	<Route exact path ='/' component={About}/>
	    </Switch>
    </BrowserRouter>
  );
}

export default App;
