import React, {Component} from 'react';
import DisplayNotes from './containers/displayNotes'
import CreateNewNote from './containers/createNewNote'
import history from './utils/history'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component{

  
  render(){
    return (
      <BrowserRouter history = {history}>
        <Route exact path = '/' component={DisplayNotes}  />
        <Route exact path = '/newNote' component={CreateNewNote}  />
      </BrowserRouter>
    );
  }
}

 

export default App;
