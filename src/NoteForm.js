import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    
    constructor(props){
      super(props);

      this.state = {
        note: {
          id: null,
          title: "",
          content: ""
        }
  
      }
    }
    
    render(){
        return(
          <div className="NoteForm">
           <form onSubmit = {this.processNote.bind(this)}>
              <p>
                <input type="text" name="title" placeholder = "Title your note" onChange = {this.changeNote.bind(this)} value = {this.props.curNote.title} />
             </p>
             <p>
                <textarea value = {this.props.curNote.content} name="content" cols="30" rows="10" placeholder= "Just start typing..." onChange = {this.changeNote.bind(this)}></textarea>
             </p>
              <p>
               <button type = "submit" name = "submitButton" >Create Note</button> 
               <button type = "button" name = "deleteButton" onClick = {() => {this.props.deleteNote(this.props.curNote)}}> <i className="fa fa-trash" aria-hidden="true"></i> </button>
             </p>
            </form >
         </div>
        );
    }

 changeNote(ev){

  //[... stuff] is called spread
    const curNote = {...this.props.curNote};
    curNote[ev.target.name] = ev.target.value;
    
    this.props.saveNote(curNote);

   let newValue = ev.target.value;
   
   if(ev.target.name === "title"){
     let note = this.state.note;
     note.title = newValue;
     this.setState({note: note});
   }else{
      let note = this.state.note;
      note.content = newValue;
      this.setState({note: note});
   }

  }


 processNote(ev){
  ev.preventDefault();

  let curNote = {...this.props.curNote}
  curNote['title'] = "";
  curNote['content'] = "";
  curNote['id'] = null;

  this.props.fetchFunction(curNote);
}

}


export default NoteForm;