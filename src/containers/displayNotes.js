import React, { Component } from 'react';
import Header from '../components/header'
import axios from 'axios';
import NoteList from '../components/noteList'
import url from '../utils/service'
import NewNoteNav from '../components/newNoteNav'

export default class DispalyNotes extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            editNote : [],
            note: {},
        };
    }

    getNotes = () => {
        axios.get(url('notes'))
            .then((res) => {
                if(res.data.length === 0){
                    this.setState({ notes: this.state.templist })
                }else{
                    this.setState({ notes: res.data })
                }
           }
            )
            .catch((err) => console.log(err.response.data));
    }

    getNote = (id) => {
        axios.get(url(`notes/${id}`))
            .then((res) => {
                this.setState({ editNote: res.data })
                this.props.history.push({pathname : '/newNote', state : this.state.editNote})
            })
            .catch((err) => console.log(err.response.data));
    }

    deleteNote = (id) => {
        const newNotesState = this.state.notes.filter((note) => note.id !== id);
        axios.delete(url(`notes/${id}`))
            .then((res) => this.setState({ notes: newNotesState }))
            .catch((err) => console.log(err.response.data));
    }
    goToNewNote =()=>{
        this.props.history.push('/newNote')
    }

    render() {
        return (
            <div>
                <Header title = 'Ronzzi notes'/>
                <NoteList
                getNotes={this.getNotes}
                notes={this.state.notes}
                getNote={this.getNote}
                deleteNote={this.deleteNote}
            />
            <NewNoteNav goToNewNote = {this.goToNewNote} name = 'New note'/>
            </div>

        )
    }
}