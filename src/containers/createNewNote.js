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
            console.log(this.props.location.state)
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

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state){
            this.getNote()
        }
    }

    getNote = () => {
        const { fetchAllNotes: FetchNotes } = this.props
        const id = this.props.location.state
        FetchNotes(NOTES_CRUD + '/' + id)
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.fetchAllNotesReducer.data) {
            return { noteValue : {
                title: nextProps.fetchAllNotesReducer.data.title,
                content: nextProps.fetchAllNotesReducer.data.content
            }
        }
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.title.value !== '' && this.content.value !== ''){
            let {fetchAllNotes : FetchNotes, createNoteAction: CreateNote, editNoteAction : SubmitEditNote } = this.props

            if(this.props.location.state){
                const id = this.props.location.state
                let formData = {
                    title: this.title.value,
                    content: this.content.value,
                    url: NOTES_CRUD+'/'+id
                };
                SubmitEditNote(formData)
                FetchNotes(NOTES_CRUD)

            }else{
                let formData = {
                    title: this.title.value,
                    content: this.content.value,
                    url: NOTES_CRUD
                };
                console.log(formData)
                CreateNote(formData)
            }

            setTimeout(
                function () {
                    this.props.history.push('/')
                }
                    .bind(this),
                1000
            );
        }else{
            alert('enter title and content!!1')
        }

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
                        <input
                        type="text"
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
        fetchAllNotesReducer: fetchAllReducers.fetchAllNotesReducer
    };
}

const mapDispatchToProps = {
    createNoteAction: fetchAllAcions.createNoteAction,
    InitialStateAction: fetchAllAcions.InitialStateAction,
    fetchAllNotes: fetchAllAcions.fetchAllNotes,
    editNoteAction : fetchAllAcions.editNoteAction
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateNewNote)