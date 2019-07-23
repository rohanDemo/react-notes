import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NOTES_CRUD } from '../config'
import { fetchAllAcions } from '../redux/Notes'


class CreateNewNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status: null
        }
        if (this.props.location.state) {
            this.state = {
                noteValue: this.props.location.state
            }
        } else {
            this.state = {
                noteValue: {
                    title: '',
                    content: ''
                }
            }
        }

        console.log(this.state.noteValue.id)
        this.onSubmit = this.onSubmit.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        // return{status: nextProps.createNoteReducer.data}
        // // if (nextProps.createNoteReducer.data === 201) {
        //   return { status: nextProps.InitialStateReducer.data}
        // } else {
        //     return{status: nextProps.createNoteReducer.data}
        // }
    }

    navigateToList = () => {
        // let { InitialStateAction: InitialState } = this.props

        // if (this.state.status === 201) {
            // InitialState();
            // this.props.history.push('/')
        // }

    }

    onSubmit = (e) => {
        let { createNoteAction: CreateNote } = this.props
        e.preventDefault();
        let formData = {
            title: this.title.value,
            content: this.content.value,
            url: NOTES_CRUD
        };
        console.log(formData)
        CreateNote(formData)
        setTimeout(
            function() {
                this.props.history.push('/')
            }
            .bind(this),
            1000
        );
    }

    render() {
        return (
            <div className="note-container">
                <h3>create note</h3>
                <form
                    className="note-form"
                    onSubmit={this.onSubmit}
                >
                    <div className="note-title">
                        <input
                            className="note-title-input"
                            type="text"
                            placeholder="Enter title "
                            defaultValue={this.state.noteValue.title}
                            ref={(input) => this.title = input}
                        />
                    </div>
                    <div className="note-textarea-container">
                        <textarea
                            className="note-title-input"
                            placeholder="Enter your content"
                            rows={10}
                            defaultValue={this.state.noteValue.content}
                            ref={(input) => this.content = input}
                        />
                    </div>
                    <input className="note-button" type="submit" value="Save" />
                </form>
            </div>

        );
    }
}
const mapStateToProps = ({ fetchAllReducers }) => {
    return {
        createNoteReducer: fetchAllReducers.createNoteReducer,
        InitialStateReducer: fetchAllReducers.InitialStateReducer
    };
}

const mapDispatchToProps = {
    createNoteAction: fetchAllAcions.createNoteAction,
    InitialStateAction: fetchAllAcions.InitialStateAction
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateNewNote)