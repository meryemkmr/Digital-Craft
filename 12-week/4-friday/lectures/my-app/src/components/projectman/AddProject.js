import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class AddProject extends Component {


    handleSubmit = (e) => {
        //collect info and make an object and send back to parent to be pushed in
        //main projects array


        e.preventDefault();

        //   {
        //       id: id,
        //       title: this.refs.title.value,
        //       category: this.refs.category.value
        //   }

        this.props.addProject({
            id: uuidv4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        })
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" ref="title" placeholder="Title" />

                    <select name="" ref="category" >
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                    </select>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default AddProject