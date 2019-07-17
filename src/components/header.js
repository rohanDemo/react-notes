import React from 'react';
import '../components/note.css'

const Header = (props) => {
    return (
        <div className = 'app-header'>
            <h1>
                {props.title}
            </h1>
        </div>

    )
}
export default Header;