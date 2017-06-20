import React, { Component } from 'react';
import './Main.css';

import Nav from './Nav.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm'

class Main extends Component{

    constructor(){
        super();
        
        this.state = {
            notes: [],
        }
    }

    render(){
        return(
            <div id = "container">
                <Nav />
                <NoteList notes = {this.state.notes}/>
                <NoteForm fetchFunction = {this.fetch.bind(this)}/>
           </div>
        );
    }

    fetch(note){
        let tempNotes = this.state.notes;  

        console.log("This")
        console.log(this);
      
        console.log("Notes before addition");
        console.log(tempNotes);

        tempNotes.push(note);

        console.log("Notes after addition");
        console.log(tempNotes);

        this.setState({notes: tempNotes});
    }
}

export default Main;