import React, { Component } from 'react'
import './styles.css'
import { Row } from 'react-bootstrap'
import Key from './Key';
import './styles.css'

class Calculator extends Component {
    render() {
        return (
            <>
                <Row>
                    <div className="window">0</div>
                </Row>
                <Row>
                    <Key num="AC" bgc={true} />
                    <Key num="+/-" bgc={true} />
                    <Key num="%" bgc={true} />
                    <Key num="x" bgc={true} />
                </Row>
                <Row>
                    <Key num="7" />
                    <Key num="8" />
                    <Key num="9" />
                    <Key num="x" bgc={true} />
                </Row>
                <Row>
                    <Key num="4" />
                    <Key num="5" />
                    <Key num="6" />
                    <Key num="-" bgc={true} />
                </Row>
                <Row>
                    <Key num="1" />
                    <Key num="2" />
                    <Key num="3" />
                    <Key num="+" bgc={true} />
                </Row>

                <Row>
                    <Key num="0" zero={true} />
                    <Key num="." />
                    <Key num="=" />
                </Row>

            </>
        )
    }
}

export default Calculator