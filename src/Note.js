
import React, { Component } from 'react';
import './Note.css';

class Note extends Component{
    render(){
        return(
            <li onClick = {() => {this.props.getNoteFunction(this.props.note)}}>
            <div className="note" >
              <div className="note-title" >
                {this.props.note.title}
              </div>
              <div className="note-body" >
                <p>
                 {this.props.note.content}
                </p>
              </div>
            </div>
          </li>
      
    
      
        );
    }

    handleDelete(){
      this.props.delFunction(this.props.id);
    }


}


export default Note;