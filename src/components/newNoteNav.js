import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../components/note.css'

const NewNoteNav = (props) => {

    return (
        <div className='app-footer'>
            <Fab className ='add-note-button' onClick={props.goToNewNote}>
                <AddIcon className = "addnote-button-icon" />
            </Fab>
        </div>

    )
}
export default NewNoteNav;