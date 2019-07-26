import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import './note.css'

const NoteCardContent = (props) => {

  const { note, getNote, deleteNote } = props;
  return (
    <div className="note-card-container">
      <div className="note-card-title">
        <h3 className="note-title">{note.title}</h3>
      </div>
      <div className="note-card-content">
        {note.content}
      </div>
      <div className='note-card-button-container'>
        <Fab className='delete-icon-container' onClick={() => deleteNote(note.id)}>
          <DeleteIcon className='delete-icon' />
        </Fab>
        <Fab className='delete-icon-container' onClick={() => getNote(note.id)}>
        <EditIcon/>
      </Fab>
      </div>
    </div>
  );
}

export default NoteCardContent;