import React, { Component } from 'react';
import './note.css'

class NoteCardContent extends Component {
  renderTags(note) {
    return note.tags.map((tag, index) => 
      <span className="note-card-tag" key={index}>
        {tag.name}
      </span>
    );
  }

  render() {
    const { note, getNote, deleteNote } = this.props;
    return(
      <div className="note-card-container">
        <div className="note-card-title">
          {note.title}
        </div>
        <div className="note-card-content">
          {note.content}
        </div>
        <div className="note-card-tags">
          {this.renderTags(note)} 
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
}

export default NoteCardContent;