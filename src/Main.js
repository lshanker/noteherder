import React, { Component } from 'react';
import './Main.css';

import Nav from './Nav.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm'
import SignIn from './SignIn'
import SignOut from './SignOut'

import base, {auth} from './base'

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

      uid: null,

          curNote: {
          id: null,
          title: "",
          content: "",
      }

  
        }

            
   
}

    componentWillMount(){
         base.syncState(
         'notes',
            {
          context: this,
          state: 'notes',

         }
        )
    }

    signedIn = () => {
        return this.state.uid;
    }

    signOut = () => {
        auth
            .signOut()
            .then(() => {
                this.setState({uid: null})
            })
        
    }

    authHandler = (userData) => {
        this.setState({uid: userData.uid})
    }

    renderMain = () => {
        return(
            <div id = "container">
                <SignOut signOut = {this.signOut}/>
                <Nav />     
                <NoteList  getNoteFunction = {this.getNoteConent.bind(this)} notes = {this.state.notes} delFunction = {this.deleteNote.bind(this)}/>
                <NoteForm deleteNote = {this.deleteNote.bind(this)} saveNote = {this.saveNote.bind(this)} curNote = {this.state.curNote} fetchFunction = {this.fetch.bind(this)}/>
            </div>
        )
    }

    render(){
        return(
            <div id = "container">

                {this.signedIn() ? this.renderMain() : <SignIn authHandler = {this.authHandler}/>}
             
           </div>
        );
    }

    deleteNote = (curNote) => {
        let id = curNote.id;

        let notesCopy = {...this.state.notes};
        delete notesCopy[id];
        this.setState({notes: notesCopy});
        

        this.setState({curNote: this.blankNote()})
    }


    blankNote = () => {
        return(
            {
                title: "",
                content: "",
                id: null,
            }
        );
    }

    getNoteConent = (note) => {
        this.setState({curNote: note});
    }

    saveNote = (curNote) => {

         if (!curNote.id) {
             curNote.id = `note-${Date.now()}`
         }

        this.setState({curNote})
    
        let notes = {...this.state.notes}
        notes[curNote.id] = curNote
        this.setState({notes})

    }


    fetch = (curNote) => {
        this.setState({curNote})
    }
}

export default Main;