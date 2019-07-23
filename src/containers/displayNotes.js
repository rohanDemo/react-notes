import React, { Component } from 'react';
import Header from '../components/header'
import axios from 'axios';
import NoteList from '../components/noteList'
import url from '../config'
import NewNoteNav from '../components/newNoteNav'
import { connect } from 'react-redux'
import { fetchAllAcions } from '../redux/Notes'
import { NOTES_CRUD } from '../config'
import { DeleteNote } from '../redux/Notes/service'

class DispalyNotes extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            editNote: [],
            note: {},
            delete: false
        };
    }

    componentDidMount() {
        this.fetchNotes()
    }

    fetchNotes = () => {
        const { fetchAllNotes: FetchNotes } = this.props
        FetchNotes(NOTES_CRUD)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.delete) {
            if (nextProps.fetchAllNotesReducer.data) {
                let notes = nextProps.fetchAllNotesReducer.data;
                return { notes }
            }
        }


        console.log(nextProps)
        return null;
    }

    // getNote = (id) => {
    //     axios.get(url(`notes/${id}`))
    //         .then((res) => {
    //             this.setState({ editNote: res.data })
    //             this.props.history.push({pathname : '/newNote', state : this.state.editNote})
    //         })
    //         .catch((err) => console.log(err.response.data));
    // }

    deleteNote = (id) => {
        // const { deleteNoteAction: DeleteNote } = this.props
        let url = NOTES_CRUD + '/' + id
        DeleteNote(url)
        const newNotesState = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: newNotesState, delete: true })
    }

    goToNewNote = () => {
        this.props.history.push('/newNote')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header title='Ronzzi notes' />
                <NoteList
                    // getNotes={this.getNotes}
                    notes={this.state.notes}
                    // getNote={this.getNote}
                    deleteNote={this.deleteNote}
                />
                <NewNoteNav goToNewNote={this.goToNewNote} name='New note' />
            </div>

        )
    }
}
const mapStateToProps = ({ fetchAllReducers }) => {
    return {
        fetchAllNotesReducer: fetchAllReducers.fetchAllNotesReducer,

    };
}
const mapDispatchToProps = {
    fetchAllNotes: fetchAllAcions.fetchAllNotes,
    deleteNoteAction: fetchAllAcions.deleteNoteAction
};

export default connect(mapStateToProps, mapDispatchToProps)(DispalyNotes)
