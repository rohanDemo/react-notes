import React from 'react';
import '../components/note.css'

const NewNoteNav = (props) => {
   
    return (
        <div className = 'app-footer'>
            <button onClick = {props.goToNewNote}>
                {props.name}
            </button>
        </div>

    )
}
export default NewNoteNav;