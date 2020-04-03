import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            txt:'this is a text',
            num1:3,
            num2:4

        }
        // setTimeout((params) => {
        //     this.setState({txt:'Hello World})
        // }, 2000
        // )
        
    }
 handleUpdate = () => {
     console.log('buttum was clicked')
    //  this.setState({txt: "hello world"})
     this.setState({num1:this.state.num1 +1})
     
 }
 
    render() {
        return (
            <>
            <h1>{this.state.txt}</h1>
            <h2>{this.state.num1 }+{ this.state.num2} = {this.state.num1+this.state.num2}</h2>
            <br/>
            <button onClick={this.handleUpdate}>Click me</button>
            </>
        )
    }
}


// Child.propTypes = {
//     txt:propTypes.string,
//     integer: propTypes.number,
//     integer:propTypes.number.isRequired
// };

export default Child
