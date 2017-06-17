import React, { Component } from 'react';
import './Main.css';

import Nav from './Nav.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm'

class Main extends Component{
    render(){
        return(
            <div id = "container">
                <Nav />
                <NoteList />
                <NoteForm />
           </div>
        );
    }
}

export default Main;