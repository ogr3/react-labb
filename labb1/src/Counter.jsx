import React from "react"
import './Counter.css'
import './App.css'

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.increaseCounter = () => this.changeCounter(1)
        this.decreaseCounter = () => this.changeCounter( -1)
    }

    changeCounter(value) {
        this.setState({
            counter: Math.max(this.state.counter + value, 0)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseCounter}>+</button>
                <div className='counter'>{this.state.counter}</div>
                <button onClick={this.decreaseCounter}>-</button>
            </div>
        )
    }
}