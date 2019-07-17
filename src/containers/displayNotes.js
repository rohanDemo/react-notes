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
            note: {},
            error: '',
            templist : [{
                "id": 1375,
                "title": "temp data",
                "content": "al habibi",
                "created_at": "2019-07-16T10:00:10.742Z",
                "updated_at": "2019-07-16T10:00:10.742Z",
                "tags": []
            }, {
                "id": 1376,
                "title": "temp data 2 ",
                "content": "jhiu di diu d",
                "created_at": "2019-07-16T10:58:39.510Z",
                "updated_at": "2019-07-16T10:58:39.510Z",
                "tags": []
            }]

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
        // axios.get(url(`notes/${id}`))
        //     .then((res) => this.setState({ note: res.data, showNote: true }))
        //     .catch((err) => console.log(err.response.data));
        alert('thamb jara ajun nai')
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