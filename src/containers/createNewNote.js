import React, { Component } from 'react';
import url from '../utils/service'
import axios from 'axios'

class CreateNewNote extends Component {

    constructor(props) {
        super(props)
       
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (e){
        e.preventDefault();
        const formData = {
            title: this.title.value,
            content: this.content.value
          };
          console.log(formData)
          axios.post(url('notes'), formData)
          .then((res) => { 
                this.props.history.push('/')
          })
          .catch((error)=>{
            alert('errrrrrrrror')
          })
          
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
                            ref={(input) => this.title = input}
                        />
                    </div>
                    <div className="note-textarea-container">
                        <textarea
                            className="note-title-input"
                            placeholder="Enter your content"
                            rows={10}
                            ref={(input) => this.content = input}
                        />
                    </div>
                    <input className="note-button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateNewNote;