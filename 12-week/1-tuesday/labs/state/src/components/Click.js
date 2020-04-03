import React from 'react';
import PropTypes from 'prop-types';

class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            txt:'Add Product',
            num1:0,
            num2:0
        }
        
    }
    // handleUpdate = () => {
    //     console.log('buttum was clicked')
    //    //  this.setState({txt: "hello world"})
    //    this.setState({num1:this.state.num1 +1})
    //    this.setState({num1:this.state.num1 -1})

        
    // }
    incrementPlus = () => {
        this.setState({num1: this.state.num1 + 1});
    }
    incrementMinus = () => {
        this.setState({num1: this.state.num1 - 1});
    }
    render() {
        return (
            <>
                {this.state.txt}<br />
                {/* {this.state.num1} * {this.state.num2} = {this.state.num1*this.state.num2}<br /> */}

                <button >{this.state.num1}</button><br />
                <button onClick={this.incrementPlus}>+</button>
                <button onClick={this.incrementMinus}>-</button>
                {/* <h1>{this.props.txt}</h1>
                {3 * this.props.integer} */}
            </>
        )
    }
}


//     render() {
//         return (
//             <>
//             <h1>{this.state.txt }</h1>
//             <button onClick={this.handleUpdate}>+</button>
//             <button onClick={this.handleUpdate}>-</button>
//             </>
//         );
//     }
// }


// Click.propTypes = {
    
// };

export default Click










