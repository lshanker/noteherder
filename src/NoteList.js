import React, { Component } from 'react';
import './NoteList.css';

import Note from './Note';


class NoteList extends Component{
  render(){
  return (
          <div className="NoteList" onClick = {this.handleClick}>
          <h3>Notes</h3>
           <ul id="notes">

           { Object.keys(this.props.notes).map((noteId) => {
           return <Note getNoteFunction = {this.props.getNoteFunction} note = {this.props.notes[noteId]} id = {noteId} key={noteId} 
                  delFunction = {this.props.delFunction}/> }) }

        
           </ul>
          </div>
        )
  }

 
}

export default NoteList;