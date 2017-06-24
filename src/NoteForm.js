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
                <input type="text" name="title" placeholder="Title your note" onChange = {this.changeNote.bind(this)}/>
             </p>
             <p>
                <textarea name="body" cols="30" rows="10" placeholder="Just start typing..." onChange = {this.changeNote.bind(this)}></textarea>
             </p>
              <p>
               <button type = "submit" name = "submitButton" >Create Note</button> 
             </p>
            </form >
         </div>
        );
    }

 changeNote(ev){
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
  ev.target.reset();
  this.setState(
     {note: {
          id: null,
          title: "",
          content: ""
        }}
  )
  this.props.fetchFunction(this.state.note);
}

}


export default NoteForm;