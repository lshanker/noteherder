import React, { Component } from 'react';
import './NoteList.css';

import Note from './Note';

class NoteList extends Component{


    render(){
        return(
          <div className="NoteList">
           <h3>Notes</h3>
           <ul id="notes">
          
           {this.props.notes.map((cur, i) => <Note  key = {i} title = {cur.title} content = {cur.content} />)}

           </ul>
          </div>
        );
    }
}

export default NoteList;