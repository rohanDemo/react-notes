import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NOTES_CRUD} from '../config'
import {fetchAllAcions} from '../redux/Notes'


class CreateNewNote extends Component {

    constructor(props) {
        super(props)
        if(this.props.location.state){
            this.state ={
                noteValue : this.props.location.state
            }
        }else{
            this.state ={
                noteValue : {
                    title : '',
                    content : ''
                }
            }
        }

       console.log(this.state.noteValue.id)
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (e){
        const { createNoteAction: CreateNote } = this.props
        e.preventDefault();
        const formData = {
            title: this.title.value,
            content: this.content.value
          };
          console.log(formData)
        //   if(this.props.location.state){

        //     axios.patch(url(`notes/${this.state.noteValue.id}`), formData)
        //     .then((res) => {
        //           this.props.history.push('/')
        //     })
        //     .catch((error)=>{
        //       alert('errrrrrrrror')
        //     })
        //   }else{

            // axios.post(url('notes'), formData)
            // .then((res) => {
            //       this.props.history.push('/')
            // })
            // .catch((error)=>{
            //   alert('errrrrrrrror')
            // })
        //   }

        CreateNote(NOTES_CRUD,formData)

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
                            defaultValue = {this.state.noteValue.title}
                            ref={(input) => this.title = input}
                        />
                    </div>
                    <div className="note-textarea-container">
                        <textarea
                            className="note-title-input"
                            placeholder="Enter your content"
                            rows={10}
                            defaultValue = {this.state.noteValue.content}
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

    };
}
const mapDispatchToProps = {
    createNoteAction: fetchAllAcions.createNoteAction,
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateNewNote)