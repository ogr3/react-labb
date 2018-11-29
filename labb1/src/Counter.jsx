import React from "react"
import './Counter.css'
import './App.css'
import { connect } from 'react-redux'
import { increaseCounterAction } from "./state";
import { decreaseCounterAction} from "./state";

export class Counter extends React.Component {
    render() {
        return (
            <div>

                <button onClick={this.props.increaseCounter}>+</button>
                <div className='spinner'>{this.props.counterValue}</div>
                { this.props.counterValue !== 666 && <button onClick={this.props.decreaseCounter}>-</button> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counterValue: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch(increaseCounterAction),
        decreaseCounter: () => dispatch(decreaseCounterAction)
    }
}

export const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)