import React, { Component } from 'react';
import Header from '../components/header'
import axios from 'axios';
import NoteList from '../components/noteList'
import url from '../config'
import NewNoteNav from '../components/newNoteNav'
import { connect } from 'react-redux'
import { fetchAllAcions } from '../redux/Notes'
import {NOTES_CRUD} from '../config'

class DispalyNotes extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            editNote: [],
            note: {},
        };
    }

    componentDidMount() {
        this.fetchNotes()
    }

    fetchNotes = () => {
        const { fetchAllNotes: FetchNotes } = this.props
        FetchNotes(NOTES_CRUD)
    }

    static getDerivedStateFromProps(nextProps) {

        if(nextProps.fetchAllNotesReducer.data){
            let notes = nextProps.fetchAllNotesReducer.data;
            return {notes}

        }

        console.log(nextProps)
        return null;
    }


    // getNotes = () => {
    //     axios.get(url('notes'))
    //         .then((res) => {
    //             if(res.data.length === 0){
    //                 this.setState({ notes: this.state.templist })
    //             }else{
    //                 this.setState({ notes: res.data })
    //             }
    //        }
    //         )
    //         .catch((err) => console.log(err.response.data));
    // }

    // getNote = (id) => {
    //     axios.get(url(`notes/${id}`))
    //         .then((res) => {
    //             this.setState({ editNote: res.data })
    //             this.props.history.push({pathname : '/newNote', state : this.state.editNote})
    //         })
    //         .catch((err) => console.log(err.response.data));
    // }

    // deleteNote = (id) => {
    //     const newNotesState = this.state.notes.filter((note) => note.id !== id);
    //     axios.delete(url(`notes/${id}`))
    //         .then((res) => this.setState({ notes: newNotesState }))
    //         .catch((err) => console.log(err.response.data));
    // }
    goToNewNote =()=>{
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
                // deleteNote={this.deleteNote}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(DispalyNotes)
