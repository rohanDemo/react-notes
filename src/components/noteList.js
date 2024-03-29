import React, { Component } from 'react';
import NoteCardContent from './noteCardContent';
import './note.css'


class NoteList extends Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    const { notes, getNote, deleteNote } = this.props;

    const cards = notes.map((note, index) => {
      return (
        <NoteCardContent
          key={index}
          index={index}
          note={note}
          getNote={getNote}
          deleteNote={deleteNote}
        />
      );
    });

    return (
      <div className="list-container">
        {cards}
      </div>
    );
  }
}

export default NoteList;