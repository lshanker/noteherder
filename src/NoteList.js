import React, { Component } from 'react';
import './NoteList.css';

import Note from './Note';

class NoteList extends Component{
  render(){
  return (
          <div className="NoteList">
           <h3>Notes</h3>
           <ul id="notes">
          
           { Object.keys(this.props.notes).map((noteId) => {
          return <Note title={this.props.notes[noteId].title} content = {this.props.notes[noteId].content} id = {noteId} key={noteId} 
                  delFunction = {this.props.delFunction}/> }) }

           </ul>
          </div>
        )
  }
}

export default NoteList;