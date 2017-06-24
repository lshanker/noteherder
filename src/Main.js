import React, { Component } from 'react';
import './Main.css';

import Nav from './Nav.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm'

class Main extends Component{

    constructor(){
        super();
        
         this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'Thoughts on React',
          content: 'React is pretty nifty. Declarative FTW! 🎸',
        },
        'note-2': {
          id: 'note-2',
          title: 'State and props?',
          content: 'Wat',
        },
      },
        }
    }

    render(){
        return(
            <div id = "container">
                <Nav />
                <NoteList notes = {this.state.notes} delFunction = {this.deleteNote.bind(this)}/>
                <NoteForm fetchFunction = {this.fetch.bind(this)}/>
           </div>
        );
    }

    deleteNote = (id) => {
        let notesCopy = {...this.state.notes};
        delete notesCopy[id];
        this.setState({notes: notesCopy});
    }

    fetch = (note) => {


         if (!note.id) {
             //QUESTION what is the $ syntax
        note.id = `note-${Date.now()}`
         }

    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
    

        /*
        debugger;

        console.log("Notes in state: ");
        console.log(this.state.noteArray)

        console.log(note);

        debugger;
        const tempNotes = [... this.state.noteArray.slice()];  

        console.log("TempNotes before unshift")
        //console.log(tempNotes);

        tempNotes.unshift(note);

        console.log("After unshift")
        //console.log(tempNotes)

        console.log(this.state.noteArray);

        this.setState({noteArray: tempNotes});

        console.log(this.state.noteArray);
        debugger;
        */
    
    }
}

export default Main;