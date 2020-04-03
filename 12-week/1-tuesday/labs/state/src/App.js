import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Child from './components/Child'
import Click from './components/Click'
import News from './components/News'

class App extends Component {
  render() {
    let txt = this.props.txt;
    return (
        <div>
           <News/> 
        </div>
    );
  }
}

export default App
