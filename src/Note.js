
import React, { Component } from 'react';
import './Note.css';

class Note extends Component{
    render(){
        return(
            <li>
            <div className="note">
              <div className="note-title">
                {this.props.title}
              </div>
              <div className="note-body">
                <p>
                 {this.props.content}
                </p>
              </div>
              <button onClick = {this.handleDelete.bind(this)}>Delete</button>
            </div>
          </li>
        );
    }

    handleDelete(){
      this.props.delFunction(this.props.id);
    }
}


export default Note;