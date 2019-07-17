import React, { Component } from 'react';
import './note.css'

const NoteCardContent =(props)=>{
 
    const { note, getNote, deleteNote } = props;
    return(
      <div className="note-card-container">
        <div className="note-card-title">
          {note.title}
        </div>
        <div className="note-card-content">
          {note.content}
        </div>       
        <button className="note-card-delete" onClick={() => deleteNote(note.id)}>
          Delete
        </button>
        <button className="note-card-edit" onClick={() => getNote(note.id)}>
         Edit
        </button>
      </div>
    );
}

export default NoteCardContent;